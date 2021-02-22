/* conditionals.js */

function numberOfOdds(num) {
  // num is a positive integer greater than 0
  // loop from 0 to num, iterating by 1
  // this required to be a loop
  // return the count of odd numbers
  // for example, if num is 5 you will check 0,1,2,3,and 4
  // and count of the odd values is 2
  // write your code here

}

function gradeGenerator(score) {
  // score is a positive integer 0 through 100
  // generate a letter grade based on the following
  // table
  // < 60	F
  // < 70	D
  // < 80	C
  // < 90	B
  // < 100	A
  // return the letter grade as a string
  // write your code here

}

function getGrade(name, score) {
  // this function is passed 2 parameters
  // name is a string and score is a number
  // 0 through 100
  //
  // call the above gradeGenerator() function
  // to find a letter grade with that score
  // return a string written like:
  // Francine got an A
  // David got a B
  // note it's "an A" (not a A)

}

function riceKrispies(num) {
  // num is a integer > 0
  // return a string depending the following rules
  // if num is divisible by 3 the sting will start with Snap!
  // if num is divisible by 5 the string will next include the word Crackle!
  // if num is divisible by 7 the string will end with the word Pop!
  // if num is not divisible by 3, 5, or 7, the string is "No Breakfast!"
  // Your string has to have grammar
  // num = 3, 6, etc. the str is "Snap!"
  // num = 5, 10, etc. the str is "Crackle!"
  // num = 7, 14, etc. the str is "Pop!"
  // num = 15, 30, etc. the str is "Snap! and Crackle!"
  // num is 21, 42, etc. the str is "Snap! and Pop!"
  // num is 35, 70, etc. the str is "Crackle! and Pop!"
  // num is 105, 210, etc. the str is "Snap!, Crackle! and Pop!"
  // write your code here

  if (num % 105 == 0) {
    return "Snap!, Crackle! and Pop!";
  }
  else if (num % 35 == 0) {
    return "Crackle! and Pop!";
  }
  else if (num % 21 == 0) {
    return "Snap! and Pop!"
  }
  else if (num % 15 == 0) {
    return "Snap! and Crackle!"
  }
  else if (num % 7 == 0) {
    return "Crackle!"
  }
  else if (num % 5 == 0) {
    return "Crackle!"
  }
  else if (num % 3 == 0) {
    return "Snap!"
  }
  else {
    return "No breakfast!"
  }


  

}

module.exports = {
  numberOfOdds,
  gradeGenerator,
  getGrade,
  riceKrispies,
};