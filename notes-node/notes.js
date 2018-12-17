console.log('starting notes.js');

const fs = require('fs'); // file read

var addNote = (title, body) => {

  console.log('adding note', title, body);

  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    console.log('added note!');
  }
};
//
//
//
//
var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting ', title);
};

var removeNote = (title) => {
  console.log('removing ', title);
}


module.exports = { // create function
  addNote,
  getAll,
  getNote,
  removeNote
};
