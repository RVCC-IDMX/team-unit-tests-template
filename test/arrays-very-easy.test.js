/* eslint-disable no-undef */
/* very-easy.test.js */

const {
  getFirstValue,
  getNthValue,
  makeArray,
} = require('../src/arrays-very-easy');

test('return the first argument', () => {
  expect(getFirstValue([8, 44, 33, 454])).toEqual(8);
  expect(getFirstValue([0, 3, 7, 41])).toEqual(0);
});

test('return the nth argument', () => {
  expect(getNthValue(3, [8, 44, 33, 454])).toEqual(454);
});

test('with arguments return an array of elements', () => {
  expect(makeArray(2, 3)).toEqual([2, 3]);
  expect(makeArray(2, 3, 5, 7)).toEqual([2, 3, 5, 7]);
});
