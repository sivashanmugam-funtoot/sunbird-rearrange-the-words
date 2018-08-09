var port = 8080;
var express = require('express');
var app = express();
var server = app.listen(port, function (err) {
    if (err) throw err;
    console.log('server Listnering in ' + port);
});


//middlewares
app.use('/', express.static(__dirname + '/'))
