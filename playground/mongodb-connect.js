// const MongoClient = require('mongodb').MongoClient;

// Creates a varibale using destructuring, we are pulling the property MongoClient from require('mongodb')
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // INSERTING DATA
    // ==========================================
    
    // db.collection('Todos').insertOne({
    //     text: 'Some new text',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo.', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Matt',
    //     age: 30,
    //     location: 'Histon'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('User could not be added to the database.', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});
