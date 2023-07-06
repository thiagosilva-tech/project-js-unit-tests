/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (name, age) => {
  if (typeof name !== 'string' || typeof age !== 'number') {
    return undefined;
  }
  const message =
    `Oi, meu nome é ${name}!\n` +
    `Tenho ${age} anos,\n` +
    `trabalho na Trybe e mando muito em programação!\n` +
    `#VQV!`;
  return message;
};

module.exports = vqv;
