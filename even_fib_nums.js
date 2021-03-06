/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  let firstNumber = 0;
  let secondNumber = 1;
  let nextFib = firstNumber + secondNumber;

  while (nextFib <= maxFibValue) {
    firstNumber = secondNumber;
    secondNumber = nextFib;
    nextFib = firstNumber + secondNumber;

    if (nextFib % 2 === 0 && nextFib <= maxFibValue) {
      sum += nextFib;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  let firstNumber = 0;
  let secondNumber = 1;
  let nextFib = firstNumber + secondNumber;
  let allFibs = [];

  while (nextFib <= maxFibValue) {
    firstNumber = secondNumber;
    secondNumber = nextFib;
    nextFib = firstNumber + secondNumber;
    allFibs.push(nextFib);

    for (let i = allFibs.length; i > 0; i--) {
      if (allFibs[i] > allFibs[i - 1]) {
        highest = allFibs[i];
      }
    }
  }
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};