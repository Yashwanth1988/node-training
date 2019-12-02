const MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017';

MongoClient.connect
    (url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) return console.log('error connecting db..');
        var db = client.db('psldb');
        console.log('connected to ..', db.databaseName);
        db.collection('products').updateOne({
            code: '15'
        }, {
            $set : {
                model: 'Transand'
            }
        }) 
        client.close();

    });



/* const db = require('./mongoconnect').connect;

console.log('connected to ..', db);
db.collection('products').find().toArray().then((products) => {
    console.log(products)
})  */
