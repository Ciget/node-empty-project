/// <reference path="../typings/tsd.d.ts" />
import {readFile, writeFile} from 'fs';
import * as path from 'path';

let filePath = path.join(__dirname, '../asset', 'sample.txt');
readFile(filePath, { encoding:'utf-8'},  (err:any, data:any)=>
{
    if (err) {
        console.log('it`s error');
        console.log(err);
    }
    
    console.log(data);
});