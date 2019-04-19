var express = require('express');
const router = express.Router();
var app = express();

var path = require('path');

// app.use(express.static(path.join(__dirname,'public')));

app.use(express.static('public'));

//设置跨域访问
router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get('/md', function (req, res) {
    // res.send('Hello World!');
    // res.json([1223,2313]);
    res.sendfile(path.join(__dirname, '/public/index.md')); 
    // res.sendfile('index.html');
});
app.use('/use', router)
// app.get('/md', function (req, res) {  
//     // res.send('Hello World!');
//     res.sendfile(path.join(__dirname, '/public/index.md'));  
// }); 
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('Example app listening at http://%s:%s', host, port);
// });

app.listen(3000, () => {
    console.log("start 3000")
}) 