let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Middleware propio para establecer nuestras cabeceras
 * De esta manera permitimos a nuestros clientes REST usar PUT, DELETE, ...
 * next() se usa para salir de la funcion
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Request-Method');
    res.header('Access-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');

    next();
});

app.use('/api', api);

module.exports = app;
