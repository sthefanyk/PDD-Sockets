var express = require('express'),

    app = express(),
    server = require('http').createServer(app).listen(4555), // Cria um servidor HTTP e o faz escutar na porta 4555
    io = require('socket.io').listen(server), // Cria uma instância do Socket.io e a conecta ao servidor
    bodyParser = require('body-parser'); // Biblioteca para análise do corpo das requisições


// Configura o uso do bodyParser para analisar os corpos das requisições
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // Define a porta padrão como 8080 caso não seja fornecida via variável de ambiente
var router = require('./routes');

// Middleware para emitir notificações via Socket.io
var emit = function (req, res, next) {
    var notify = req.query.notification || '';
    if (notify != '') {
        io.emit('notification', notify); // Emite uma notificação via Socket.io
        next(); // Passa para o próximo middleware
    } else {
        next(); // Passa para o próximo middleware
    }
}

app.use(emit);
app.use('/api', router); 

app.listen(port);
console.log('Connected to the port ' + port);