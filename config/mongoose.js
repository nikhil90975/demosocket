const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/demosocket`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connection to Mongodb"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports =db;