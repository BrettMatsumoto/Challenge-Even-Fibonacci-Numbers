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

    if (nextFib % 2 === 0 && nextFib <= maxFibValue) {
      sum += nextFib;
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  //cannot test; appears to have an infinite loop somewhere but i cannot find where
  var highest = 0;

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