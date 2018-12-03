console.log('Starting app');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World!', function (err) {
  if (err) {
    console.log('unable to write to file!');
  }
});

console.log('successfully printed to file!');
