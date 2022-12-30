import { emptyString } from '../../render/render-const';
// eslint-disable-next-line complexity
export function searchSiblingItem(lineData, lineDataList, direction) {
    const index = lineDataList.indexOf(lineData);
    if (index === -1) {
        // console.error('lineDataList should contain lineData');
        return null;
    }
    const siblingIndex = index + direction;
    const siblingItem = siblingIndex in lineDataList ? lineDataList[siblingIndex] : null;
    if (!siblingItem) {
        return null;
    }
    if (siblingItem.trimmedLine === emptyString) {
        const newDirection = direction + (direction >= 0 ? 1 : -1);
        return searchSiblingItem(lineData, lineDataList, newDirection);
    }
    return siblingItem;
}
export function getIsEdgeLine(lineData, lineDataList, direction) {
    const { selector } = lineData;
    const foundItem = searchSiblingItem(lineData, lineDataList, direction);
    return !foundItem || foundItem.selector !== selector;
}
export function getParent(lineData, lineDataList) {
    const linaDataListLength = lineDataList.length;
    // eslint-disable-next-line no-loops/no-loops
    for (let lineDataIndex = linaDataListLength - 1; lineDataIndex >= 0; lineDataIndex -= 1) {
        const lineDataCandidate = lineDataList[lineDataIndex];
        if (lineDataCandidate.spaceCount < lineData.spaceCount) {
            return lineDataCandidate;
        }
    }
    // console.error('Parent not found');
    return null;
}
//# sourceMappingURL=navigation.js.map