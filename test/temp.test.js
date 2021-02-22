/* eslint-disable no-undef */
/* temp.test.js */

const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/temp');

test('Should 0C equal 32F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('Should 32F equal 0C', () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test('Should -40C equal -40F', () => {
  expect(celsiusToFahrenheit(-40)).toBe(-40);
});

test('Should -40F equal -40C', () => {
  expect(fahrenheitToCelsius(-40)).toBe(-40);
});

test('Should 212F equal 100C', () => {
  expect(fahrenheitToCelsius(212)).toBe(100);
});
