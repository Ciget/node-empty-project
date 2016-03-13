/// <reference path="../typings/tsd.d.ts" />
import {createReadStream, writeFile} from 'fs';
import * as path from 'path';
import {createServer, ServerResponse} from 'http';

var newServer = createServer((req: any, res: ServerResponse)=>{
    if (req.url =='/big.html')
    {
        
    }
    res.write("hi. its sample");
    res.end();
})
.listen(3000);

function write()
{
    
};









// let filePath = path.join(__dirname, '../asset', 'sample.txt');
// let readStream = createReadStream(filePath, {encoding:'utf-8'});
// readStream.on('readable',  ()=>{
//    var data = readStream.read(); 
//    data.replace()
//    console.log(data);
//    console.log('-------------------');
// });

// readStream.on('end',  ()=>{
//    console.log('---------END----------');
// });
