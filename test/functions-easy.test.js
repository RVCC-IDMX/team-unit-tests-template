/* eslint-disable no-undef */
/* easy.test.js */

/* con */
const {
  convertToDecimal,
  verifySubstrs,
  checkSameSum,
} = require('../src/functions-easy');

/*  */
test('convert percentage to decimal', () => {
  expect(convertToDecimal(['33%', '98.1%', '56.44%', '100%'])).toEqual([0.33, 0.981, 0.5644, 1]);
  expect(convertToDecimal(['45%', '32%', '97%', '33%'])).toEqual([0.45, 0.32, 0.97, 0.33]);
  expect(convertToDecimal(['1%', '2%', '3%'])).toEqual([0.01, 0.02, 0.03]);
});

/* verifySubstrs */

test('check substrings at start middle and end of string', () => {
  expect(verifySubstrs('Onomatopeia', 'on', 'mato', 'ia')).toEqual('complete');
  expect(verifySubstrs('Centipede', 'Cent', 'tip', 'pede')).toEqual('complete');
  expect(verifySubstrs('Centipede', 'Cent', 'tip', 'pode')).toEqual('incomplete');
  expect(verifySubstrs('Centipede', 'Penny', 'tip', 'pede')).toEqual('incomplete');
  expect(verifySubstrs('Hey, you, stop that.', 'Hey', ', y ou, st ', '.')).toEqual('incomplete');
  expect(verifySubstrs('apple', 'AP', 'PPL', 'LE')).toEqual('complete');
  expect(verifySubstrs('https://example.com', 'https://', 'Example', '.com')).toEqual('complete');
});

test('test two arrays have the same sum', () => {
  expect(checkSameSum([1, 2, 3, 4], [4, 3, 2, 1])).toEqual(true);
  expect(checkSameSum([0, 0, 0, 0, 0], [1, 1, 1, 1])).toEqual(false);
  expect(checkSameSum([1, 1, 1, -1], [1, -1, 1, 1])).toEqual(true);
  expect(checkSameSum([0], [0])).toEqual(true);
});
