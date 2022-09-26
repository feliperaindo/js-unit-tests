import productDetails from '../src/productDetails';
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {

  // it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //   fail('Teste vazio!');

  // ESCREVA SEUS TESTES ABAIXO:

  // Teste se productDetails é uma função.
  test('Verify productDetails is a function', () => {
    expect(typeof productDetails).toBe('function');
  });

  // Teste se o retorno da função é um array.
  test('Verify function return is an array', () => {
    expect(Array.isArray(productDetails())).toBeTruthy();
  });

  // Teste se o array retornado pela função contém dois itens dentro.
  test('Verify function return an array with two itens', () => {
    expect(productDetails()).toHaveLength(2);
  });

  // Teste se os dois itens dentro do array retornado pela função são objetos.
  test('Verify two itens are objects', () => {
    expect(typeof productDetails()[0]).toBe('object');
    expect(typeof productDetails()[1]).toBe('object');
  });

  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  test('Verify if both objects are different when different parameters are received by function', () => {
    expect(productDetails('escova', 'arroz')[0]).not.toMatchObject(productDetails('escova', 'arroz')[1]);
  })

  // Teste se os dois productIds terminam com 123.
  test('Verify both produts ends with 123', () => {
    expect(productDetails('pente', 'cabide')[0]['details']['productId']).toEqual(expect.stringContaining('123'));
    expect(productDetails('pente', 'cabide')[1]['details']['productId']).toEqual(expect.stringContaining('123'))
  });
});
