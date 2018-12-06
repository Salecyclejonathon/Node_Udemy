console.log('Starting app');

const fs = require('fs'); // Allows us to write to a file
// const _ = require('lodash'); // install a third party module
const yargs = require('yargs');
const notes = require('./notes.js'); // require file for notes.js in our directory

const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ' + command);
console.log('Yargs', argv);

if (command === 'add') {

  console.log('adding new note...');
  notes.addNote(argv.title, argv.body);

} else if (command === 'list') {

  console.log('listing all notes...');
  notes.getAll();

} else if (command === 'read') {

  console.log('reading notes...');
  notes.getNote(argv.title);

} else if (command === 'remove') {

  console.log('removing note...');
  notes.removeNote(argv.title);

} else {

  console.log('command not recognised');

}
