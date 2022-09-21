/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

const characters = {
  arya: {
    name: 'Arya Stark',
    class: 'Rogue',
    phrases: ['Not today', 'A girl has no name.'],
  },
  brienne: {
    name: 'Brienne Tarth',
    class: 'Knight',
    phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
  },
  melissandre: {
    name: 'Melissandre',
    class: 'Necromancer',
    phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
  },
};

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {

    // ESCREVA SEUS TESTES ABAIXO:

  // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
  test('Vefify return when function receive no parameter', () => {
    expect(getCharacter()).toBe(undefined);
  });

  // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
  test('Verify if return a right object when function receive parameter Arya', () => {
    expect(getCharacter('Arya')).toEqual(characters.arya);
  });

  // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
  test('Verify if return a right object when function receive parameter Brienne', () => {
    expect(getCharacter('Brienne')).toEqual(characters.brienne);
  });

  // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
  test('Verify if return a right object when function receive parameter Melissandre', () => {
    expect(getCharacter('Melissandre')).toEqual(characters.melissandre);
  });

  // Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.
  test('Verify if function is case sensitive', () => {
    expect(getCharacter('melisSaNdre')).toEqual(characters.melissandre);
  });

  // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
  test('Varify if returns undefined when funciton receive a name not registered', () => {
    expect(getCharacter('bruno')).toBeUndefined();
  })
});
