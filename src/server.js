require('dotenv').config();

app = require('express')();

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = require('./routes');
var emit = require('./middleware');

app.use(emit);
app.use(process.env.API_BASE_ROUTE, router); 
app.listen(port);

console.log('Connected to the port ' + port);