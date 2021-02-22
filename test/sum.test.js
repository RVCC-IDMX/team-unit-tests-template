/* eslint-disable no-undef */
/* sum.test.js */

const { sum, betterSum } = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(11, 22)).toBe(33);
});

test('adds "1" + "2" to equal 3', () => {
  expect(betterSum('1', '2')).toBe(3);
  expect(betterSum('11', '22')).toBe(33);
});
