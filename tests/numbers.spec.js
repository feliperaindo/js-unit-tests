/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {

  // Escreva um teste em que verifica se a função retorna true
  test('Verify if function `numbers` return `true` when an array with only number is received', () => {
    expect(numbers([1])).toBeTruthy();
  });

  // Escreva um teste em que verifica se a função retorna false
  test('Verify if function `numbers` return `false` when an array with no numbers is received', () => {
    expect(numbers(['ane', 4, true, 7, 'text'])).toBeFalsy();
  })

  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  test('Verify if function `numbers` return `true` when an array [1, 2, 3, 4, 5] is a parameter', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });

  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
  test('Verify if function `numbers` return `false` when an array [1, 2, "3", 4, 5] is a parameter', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  })

  // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
  test('Verify if function `numbers` return `false` when an array [1, "a", 3] is a parameter', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  })

  // Escreva um teste em que a função recebe [' '] e retorna false
  test('Verify if function `numbers` return `false` when an array [" "] is a parameter', () => {
    expect(numbers([' '])).toBeFalsy();
  })
});
