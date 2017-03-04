function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(numIterations) {
  while (numIterations > 0) {
    console.log(numIterations--);
  }
  return 'done';
}

function doWhileLoop(array) {
  
  var maybeTrue = () => Math.random() >= 0.5;

  do {
    array.pop();
  } while (array.length || maybeTrue());

  return array;
}