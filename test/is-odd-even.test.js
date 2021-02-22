/* eslint-disable no-undef */
/* is-odd-even.js */

const {
  isOdd,
  isEven,
} = require('../src/is-odd-even');

test('Should be an even value', () => {
  expect(isEven(32)).toBe(true);
  expect(isEven(87)).toBe(false);
});

test('Should be an odd value', () => {
  expect(isOdd(13)).toBe(true);
  expect(isOdd(-40)).toBe(false);
});
