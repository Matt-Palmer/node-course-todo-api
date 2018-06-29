// const MongoClient = require('mongodb').MongoClient;

// Creates a varibale using destructuring, we are pulling the property MongoClient from require('mongodb')
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5b34f7dfee7f39ce6a70c16d')
        },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5b34e2f2bc907385405cc4ee')
        },
        {
            $set: {
                name: 'Matt',
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    // client.close();
});
