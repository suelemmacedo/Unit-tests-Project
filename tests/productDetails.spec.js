const productDetails = require('../src/productDetails');
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
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray (productDetails('firstProduct', 'secondProduct'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('firstProduct', 'secondProduct').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('firstProduct', 'secondProduct')).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('nome1', 'nome2')).not.toBe('nome1', 'nome2');
    // Teste se os dois productIds terminam com 123.
    const productsIds1 = productDetails('firstProduct', 'secondProduct')[0].details.productId; // criando constantes para que busque o que há dentro dos productIds dos parâmetros
    const productsIds2 = productDetails('firstProduct', 'secondProduct')[1].details.productId;

    expect(productsIds1.substring(productsIds1.length - 3)).toBe('123'); // utilizando o substring para captar os caracteres da palavra já capturada na constante acima, fazendo o mesmo abaixo com o productsIds2.
    expect(productsIds2.substring(productsIds2.length - 3)).toBe('123');

  });
});
