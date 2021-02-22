/* eslint-disable no-undef */
/* very-easy.test.js */
const {
  nameShuffle,
  isStrangePair,
} = require('../src/functions-very-easy');

test('shuffle first and last names', () => {
  expect(nameShuffle('George Washington')).toEqual('Washington, George');
  expect(nameShuffle('Buzz Lightyear')).toEqual('Lightyear, Buzz');
  expect(nameShuffle('Lady Gaga')).toEqual('Gaga, Lady');
  expect(nameShuffle('Mrs. Potts')).toEqual('Potts, Mrs.');
  expect(nameShuffle('Murphy O\'Brien')).toEqual('O\'Brien, Murphy');
});

test('check if a strnge pair', () => {
  expect(isStrangePair('ratio', 'orator')).toEqual(true);
  expect(isStrangePair('sparkling', 'groups')).toEqual(true);
  expect(isStrangePair('mentee', 'eminem')).toEqual(true);
  expect(isStrangePair('yahtzee', 'easy')).toEqual(true);
  expect(isStrangePair('bush', 'hubris')).toEqual(false);
  expect(isStrangePair('edit', 'cheese')).toEqual(false);
  expect(isStrangePair('false', 'true')).toEqual(false);
  expect(isStrangePair('cupid', 'dionysus')).toEqual(false);
  expect(isStrangePair('futile', 'elephant')).toEqual(false);
  expect(isStrangePair('', '')).toEqual(true);
  expect(isStrangePair('', 'abc')).toEqual(false);
  expect(isStrangePair('a', 'a')).toEqual(true);
  expect(isStrangePair('a', 'b')).toEqual(false);
  expect(isStrangePair('&', '&')).toEqual(true);
  expect(isStrangePair('&!', '!&')).toEqual(true);
  expect(isStrangePair('5556', '65')).toEqual(true);
});
