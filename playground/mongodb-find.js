// const MongoClient = require('mongodb').MongoClient;

// Creates a varibale using destructuring, we are pulling the property MongoClient from require('mongodb')
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b34bdf97a90ab7e5de956ef')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch the todos list.', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch the todos list.', err);
    // });

    // db.collection('Todos').find({completed: true}).each((err, item) => {
    //
    //     if (err) {
    //         return console.log('there was an error: ', err)
    //     }
    //
    //     console.log(JSON.stringify(item, undefined, 4));
    // });

    db.collection('Users').find({name: 'Lorraine'}).toArray((err, docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    })

    // client.close();
});
