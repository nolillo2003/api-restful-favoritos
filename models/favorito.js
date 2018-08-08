'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String
});

/**
 *  Puede agregarse un tercer parámetro que seria el nombre de
 *  la tabla en mongodb, sino lo ponemos pluraliza el nombre del objeto
 *  creando la tabla con ese nombre 
 */
module.exports = mongoose.model('Favorito', FavoritoSchema);