'use strict'

let express = require('express');
let FavoritoController = require('../controllers/favorito');
let api = express.Router();

api.get('/prueba/:nombre?', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.get('/favoritos/', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavorito);
api.put('/favorito/:id', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);

module.exports = api;