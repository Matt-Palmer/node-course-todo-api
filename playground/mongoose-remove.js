const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');
const $ = require('jquery');

// With .remove({}), an empty object needs to be passed in to have any effect.
// Just calling .remove() with no arguments will do nothing.
//
// Todo.remove({}).then((result) => {
//     console.log(result);
// });


// findOneAndRemove() and findByIdAndRemove() both work in similar ways, the only difference being
// how much detail is entered into the argument, with findOneAndRemove() we need to pass in an object
// with a key value pair for the key we wish to find. With findByIdAndRemove() we only need to
// enter a string matching an items id.
//
// Todo.findOneAndRemove({_id: "5b369740ee7f39ce6a70f331"}).then((result) => {
//     console.log(result);
// });
//
// Todo.findByIdAndRemove('5b369740ee7f39ce6a70f331').then((result) => {
//     console.log(result);
// });

$(document).ready(() => {
    console.log('ready');
});
