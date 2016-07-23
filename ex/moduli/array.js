

var MathPraim = require('math-praim');

var ar = [1, 2, 3, 4];

var i = 0;
var len = ar.length;

while(i<len) {
  var entry = ar[i++];

  console.log(entry);
}

console.log('*****');

ar.forEach(function(element) {
  console.log(element);

  element*= 10;

});

ar.push(123, 456);

console.log(ar);

var ar2 = ar.map(function(el) {
  return el * 10;
});

console.log(ar, ar2);




