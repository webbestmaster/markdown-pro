## Installation:

### Install npm modules:
```bash
$ npm i
```


## Setup environment for Ubuntu
At first install nodejs (if needed).

```bash
$ sudo apt-get clean
$ sudo apt-get update
$ sudo apt-get install nasm
$ sudo apt-get install build-essential
$ sudo apt-get install gcc
$ sudo apt-get install --no-install-recommends -y gcc make libpng-dev
```


### Check types in run time
Open .babelrc

```
"optInOnly": false, // check types in run time
"optInOnly": true, // do not check types in run time
```
