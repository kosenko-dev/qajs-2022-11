import { expect, test } from '@jest/globals'
// eslint-disable-next-line no-unused-vars
import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

/**
 * Для проверки, что jest настроен правильно. Можно удалить
 */
test('Successful test for trimming spaces', () => {
  expect(fullTrim(' arm ')).toBe('arm')
})

test('Successful test for empty string', () => {
  expect(fullTrim('')).toBe('')
})

test('Successful test with no spaces', () => {
  expect(fullTrim('arm')).toBe('arm')
})

const nameIsValidTestData = [
  { name: 'Ivan', isValid: true },
  { name: 'ad', isValid: true },
  { name: 'a', isValid: false },
  { name: '', isValid: false }
]
test.each(nameIsValidTestData)('Tests that name=$name validation is equal to $isValid', ({ name, isValid }) => {
  expect(nameIsValid(name)).toBe(isValid)
})

test.each`
    items                             | discount  | expected
    ${[{ price: 10, quantity: 10 }]}  | ${10}     | ${90}
    ${[{ price: 0, quantity: 10 }]}   | ${10}     | ${0}
    ${[{ price: 10, quantity: 0 }]}   | ${50}     | ${0}
  `('Tests that items: $items with $disount in total cost $expected', ({ items, discount, expected }) => {
  expect(getTotal(items, discount)).toBe(expected)
})
