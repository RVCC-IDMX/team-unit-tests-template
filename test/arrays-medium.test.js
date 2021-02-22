/* eslint-disable no-undef */
/* medium.test.js */

const {
  makeMirrorArray,
  makeStrToArray,
  getAbsSum,
  removeStrings,
  findMinMax,
  getAverage,
  getTelNo,
} = require('../src/arrays-medium');

test('make a mirror of an array', () => {
  const refArr = [1, 2, 3];
  expect(makeMirrorArray(refArr)).toEqual([1, 2, 3, 2, 1]);
  expect(refArr).toEqual([1, 2, 3]);
});

test('given a string make an array', () => {
  expect(makeStrToArray('Deeds will not be less valiant because they are unpraised.', ' ')).toEqual(['Deeds', 'will', 'not', 'be', 'less', 'valiant', 'because', 'they', 'are', 'unpraised.']);
});

test('get the sum of the absolute values of an array', () => {
  expect(getAbsSum([2, -1, 4, 8, 10, -21])).toEqual(46);
});

test('get an array back without any strings', () => {
  expect(removeStrings([2, 'a', 4, 'a string', 10, -21])).toEqual([2, 4, 10, -21]);
  expect(removeStrings([2, 'a', [4, 122], {}, null, 'a string', 10, -21])).toEqual([2, [4, 122], {}, null, 10, -21]);
});

test('get the min and max of an array', () => {
  expect(findMinMax([2, 4, 110, -21, 0, 42, 18])).toEqual([-21, 110]);
  expect(findMinMax([2, 4, 5510, -21, 0, 42, -Infinity, 18])).toEqual([-Infinity, 5510]);
});

test('get the average of the numbers an array', () => {
  expect(getAverage([2, 4])).toBe(3);
  expect(getAverage([9, 2, 2, 5])).toBe(4.5);
  expect(getAverage([2, 2, 2, 2])).toBe(2);
  expect(getAverage([2, 4, 6, 8, 10])).toBe(6);
  expect(getAverage([0, 0, 10])).toBe(3.33);
  expect(getAverage([21, 1, 1])).toBe(7.67);
});

test('get telephone number as string from array of 10 digits', () => {
  expect(getTelNo([2, 1, 2, 2, 5, 5, 8, 7, 6, 1])).toBe('(212)255-8761');
});
