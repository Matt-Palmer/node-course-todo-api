const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');

let id = "6b362bf88460544965d9c53e11";

let userId = "5b3606b41b45fc4000d5039f";

// if (!ObjectId.isValid(id)) {
//     console.log('ID is not valid');
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found.')
//     }
//     console.log('Todo By ID: ', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User does not exist');
    }

    console.log('User found: ', user);
}).catch((err) => {
    console.log(err);
});
