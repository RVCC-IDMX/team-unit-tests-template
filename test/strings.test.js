/* eslint-disable no-undef */
/* strings.js */

const {
  isString,
  isBlank,
  sayHelloBye,
} = require('../src/strings');

test('Should be a string', () => {
  expect(isString('32')).toBe(true);
});

test('Should be not be a string', () => {
  expect(isString(13)).toBe(false);
});

test('Should be a blank', () => {
  expect(isBlank('')).toBe(true);
});

test('Should not be a blank', () => {
  expect(isBlank('test')).toBe(false);
});

test('Should return string "Hello Woody"', () => {
  expect(sayHelloBye('Woody', 0)).toBe('Hello Woody');
});

test('Should return string "Bye Buzz Lightyear"', () => {
  expect(sayHelloBye('Buzz Lightyear', 1)).toBe('Bye Buzz Lightyear');
});
