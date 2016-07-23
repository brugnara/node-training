

const http = require('http');
const MathPraim = require('math-praim');

const hostname = '127.0.0.1';
const port = 3000;

var index = 3;

const server = http.createServer(function(req, res){

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  MathPraim.slow_sum(10, 20, index--, function(sum) {
    console.log(sum);

    MathPraim.slow_sum(20, 30, 1, function(sum2) {

      res.end('' + (sum + sum2));

    });

  });

});

server.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
