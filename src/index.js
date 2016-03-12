"use strict";
/// <reference path="../typings/tsd.d.ts" />
const fs_1 = require('fs');
const path = require('path');
let filePath = path.join(__dirname, '../asset', 'sample.txt');
fs_1.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log('it`s error');
        console.log(err);
    }
    console.log(data);
});
