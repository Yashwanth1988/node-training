const MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017';
let db = ''

MongoClient.connect
    (url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) return console.log('error connecting db..');
        db = client.db('psldb');
        console.log('connected to ..', db.databaseName);
        client.close();

    });

    module.exports.connect = db