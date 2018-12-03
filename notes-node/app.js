console.log('Starting app');

const fs = require('fs'); // Allows us to write to a file
const os = require('os');

var user = os.userInfo();
console.log(user); // allows us to view user info

// FS module
fs.appendFile('greetings.txt', 'Hello ' + user.username, function (err) { // Catch error if not available
  if (err) {
    console.log('unable to write to file!');
  }
});

console.log('successfully printed to file!');
