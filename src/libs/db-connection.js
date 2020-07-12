//Requerimos mongoose
const mongoose = require('mongoose');

let db;

if(!db) db = mongoose.connect('mongodb://localhost/crud-db',{useNewUrlParser: true, useUnifiedTopology: true});

module.exports = db;
  

