'use strict'

let Favorito = require('../models/favorito');

function prueba(req, res) {

    let nombre = "Sin nombre";

    if (req.params.nombre) {
        nombre = req.params.nombre;
    }

    res.status(200).send({
        data: [2, 3, 4],
        message: `Hola mundo con NodeJs y Express  - ${nombre}`
    });
}

function getFavorito(req, res) {
    let favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito) => {
        if (err) {
            res.status(500).send({ message: 'Error al devolver el marcador' });
            return;
        }

        if (!favorito) {
            res.status(404).send({ message: 'No hay marcador' });
            return;
        }

        res.status(200).send({favorito});
    });
}

function getFavoritos(req, res) {
    Favorito.find({}).sort('-_id').exec((err, favoritos) => {
        if (err) {
            res.status(500).send({ message: 'Error al devolver los marcadores'});
            return;
        }

        if (!favoritos) {
            res.status(404).send({ message: 'No hay marcadores' });
            return;
        }

        res.status(200).send({ favoritos });

    });
}

function saveFavorito(req, res) {
    let favorito = new Favorito();
    let params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el marcador' });
        } else {
            res.status(200).send({ favorito: favoritoStored });
        }
    });
}

function updateFavorito(req, res) {
    let favoritoId = req.params.id;
    let update = req.body;

    /**
     * Por defecto, findByIdAndUpdate devuelve favoritoUpdated que 
     * es el registro antes de actualizarlo, no el registro ya 
     *  actualizado
     */
    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el marcador' });
        } else {
            res.status(200).send({ favorito: favoritoUpdated });
        }
    });
}

function deleteFavorito(req, res) {
    let favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito) => {
        if (err) {
            res.status(500).send({ message: 'Error al localizar el marcador' });
            return;
        }

        if (!favorito ) {
            res.status(404).send({ message: 'No hay marcador'});
            return;
        }

        favorito.remove(err => {
            if (err){
                res.status(500).send({message: 'Error borrando el marcador'});
                return;
            }

            res.status(200).send({message: 'Marcador eliminado'});
        });
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}