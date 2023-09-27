var express = require('express'),

    app = express(),
    server = require('http').createServer(app).listen(4555),
    io = require('socket.io').listen(server);

var port = process.env.PORT || 8080;
var router = require('./routes');

var middleware = require('./middleware');
middleware(app, io);

app.use('/api', router); 

app.listen(port);
console.log('Connected to the port ' + port);