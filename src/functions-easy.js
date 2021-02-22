/* easy.js */

function convertToDecimal(percents) {
  // Create a function to convert an array of
  // percents to their decimal equivalents.
  // Required: use ES6 array method(s)
  // Hint: use string.replace()
}

function verifySubstrs(mainStr, head, body, tail) {
  // Write a function that takes four string arguments.
  // You will be comparing the first string to the three
  // next strings. Verify if the first string starts with
  // the second string, includes the third string in the middle,
  // and ends with the fourth string.
  // If the first string passes all checks, return 'complete'
  // else return 'incomplete'
  // the tests are not case sensitive
  // there maybe overlap between strings and the test will pass
  // this means you cannot just test if
  // "theonering" == "the" + "one" "ring"
}

function checkSameSum(a1, a2) {
  // Write a function that returns true
  // if two arrays sum up to a constant array
  // required: use ES6 array method(s)
  // https://www.tutorialspoint.com/es6/es6_arrays.htm
}

module.exports = {
  convertToDecimal,
  verifySubstrs,
  checkSameSum,
};
