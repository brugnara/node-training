

const async = require('async');

const ar = 'ciao come stai? Tutto bene, grazie';
// const arLines = 'ciao come stai?\nTutto bene, grazie'.split('\n');
const arLines = 'ciao come stai? Tutto bene, grazie'.split('');
// const bigFile = fs.readFileSync('./big.file', 'utf8');
// const bigFileLines = bigFile.split('\n');

function request(line, cb) {
  "use strict";

  setTimeout(function() {
    cb(null, line.toUpperCase());
  }, Math.random() * 1000);

}

// upcase linee

// TODO

// count chars per riga

// TODO

//

/*
arLines.forEach((line) => {
  request(line, function(err, upcaseLine) {
    if (err) {
      console.error(err);
    }
    console.log(err, upcaseLine);
  });
});
*/

/*
async.eachSeries(arLines, function(line, cb) {
  "use strict";
  request(line, function(err, upcase) {
    console.log(upcase);
    cb();
  });
}, function(err) {
  "use strict";
  console.log('finish');
});
*/

console.log(arLines.length);

async.mapLimit(arLines, 10, request, function(err, arMapped) {
  "use strict";
  err && console.error(err)
  !err && console.log(arMapped);
});

console.log('sono qui');
