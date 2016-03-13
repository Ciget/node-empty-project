"use strict";
const http_1 = require('http');
var newServer = http_1.createServer((req, res) => {
    if (req.url == '/big.html') {
    }
    res.write("hi. its sample");
    res.end();
})
    .listen(3000);
function write() {
}
;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSx1QkFBMkMsTUFBTSxDQUFDLENBQUE7QUFFbEQsSUFBSSxTQUFTLEdBQUcsbUJBQVksQ0FBQyxDQUFDLEdBQVEsRUFBRSxHQUFtQjtJQUN2RCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFHLFdBQVcsQ0FBQyxDQUMxQixDQUFDO0lBRUQsQ0FBQztJQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM1QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUM7S0FDRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFZDtBQUdBLENBQUM7QUFBQSxDQUFDO0FBVUYsaUVBQWlFO0FBQ2pFLG1FQUFtRTtBQUNuRSxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIseUNBQXlDO0FBQ3pDLE1BQU07QUFFTiw4QkFBOEI7QUFDOUIsNENBQTRDO0FBQzVDLE1BQU0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8ifQ==
