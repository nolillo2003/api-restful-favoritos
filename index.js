'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/cursofavoritos', { useNewUrlParser: true }, (err, res) => {

    if (err) {
        //Lanzamos excepción
        throw err;
    } else {
        //Lanzamos servidor http si nos conectamos
        console.log(`Conexión a MongoDB correcta`);

        app.listen(port, () => {
            console.log(`Api Restful Favoritos funcionando en http://localhost:${port}`);
        });
    }

});

