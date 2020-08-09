const recursive = require('recursive-readdir');
const path = require('path');
const fs = require('fs');
const sass = require('node-sass');

const fileExtensionList = ['css', 'scss', 'sass'];
const excludeFolderList = ['node_modules'];

function ignoreFunc(pathToFile, stats) {

    if (stats.isDirectory()) {
        return false;
    }

    const basename = path.basename(pathToFile);

    const filePathChunkList = pathToFile.split(path.sep);

    const isExcludeFolder = filePathChunkList.some(filePathChunk => excludeFolderList.includes(filePathChunk));

    if (isExcludeFolder) {
        return true;
    }

    return !fileExtensionList.some(fileExtension => basename.endsWith('.' + fileExtension));

    // `file` is the path to the file, and `stats` is an `fs.Stats`
    // object returned from `fs.lstat()`.
    // return stats.isDirectory() && path.basename(file) == "test";
}

module.exports = async function (source) {
    const rootPathFolder = this.rootContext;

    const filePathList = await recursive(rootPathFolder, [ignoreFunc]);


    filePathList.forEach(pathToFile => {
        sass.render({
            file: pathToFile,
        }, function (err, result) {
            if (err) throw err;

            console.log(result);

            fs.writeFile(pathToFile + '.new.flow', 'my file', (err) => {
                if (err) throw err;

                console.log('write', pathToFile + '.flow');
            });

        });
    });

    return source;
}
