





function sum(a, b) {

  if (!a || !b) {
    throw new Error('ouch!');
  }

  if (!+a || !+b) {
    console.log('help, a is:', +a);
    return null;
  }

  return a + b;
}

console.log(1, sum(1, 2));

try {
  console.log('1bis', sum());
} catch (e) {
  console.error(e);
}

console.log(2, sum('stringa', 2));

console.log(3, sum(2, 'stringa'));

// console.log(4, sum('stringa', 2));

