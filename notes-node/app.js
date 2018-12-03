console.log('Starting app');

const fs = require('fs'); // Allows us to write to a file
// const _ = require('lodash'); // install a third party module

const notes = require('./notes.js'); // require file for notes.js in our directory
var command = process.argv[2];
console.log('command: ' + command);
console.log(process.argv);

if (command === 'add') {
  console.log('adding new note...');
} else if (command === 'list') {
  console.log('listing all notes...');
} else if (command === 'read') {
  console.log('reading notes...');
} else if (command === 'remove') {
  console.log('removing note...');
} else {
  console.log('command not recognised');
}
