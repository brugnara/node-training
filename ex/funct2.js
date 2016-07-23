



function sum(a) {

  return function(b) {

    return a+b;

  }

}

function write(context) {

  return function(saluto) {

    console.log(context, saluto);

  }

}

console.log(sum(1)(2));

write('hello')('world');

var writer = write('hello');

writer('world 2');
writer('gatto');
