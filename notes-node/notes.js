console.log('starting notes.js');

var addNote = (title, body) => {
  console.log('adding note', title, body);
};

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
