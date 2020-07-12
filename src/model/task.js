//Declaramso el Schema dentro de una funcion para que devuelva el Schema cada vez que la ejecute desde el enrutador
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    var db = require('../libs/db-connection');
    var Schema = require('mongoose').Schema;

    var Task  = new Schema({
        title: String,
        description: String,
        status: Boolean,
    });
    module.exports = mongoose.model('tasks',Task);


