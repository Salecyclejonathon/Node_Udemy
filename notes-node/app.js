console.log('Starting app');

const fs = require('fs'); // Allows us to write to a file
const os = require('os');
const notes = require('./notes.js'); // require file for notes.js in our directory

var res = notes.addNote();
var addRes = notes.add(3, 8);
console.log(addRes);
console.log(res);

// var user = os.userInfo();
// console.log(user); // allows us to view user info

// FS module
// fs.appendFile('greetings.txt', 'Hello ' + user.username + 'you are ' + notes.age, function (err) { // Catch error if not available
//   if (err) {
//     console.log('unable to write to file!');
//   }
// });

// console.log('successfully printed to file!');
