const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    // 1. Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu e outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função
    const retorno1 = createMenu();
    expect(retorno1).toHaveProperty('fetchMenu');
    expect(typeof retorno1.fetchMenu).toBe('function');

    // 2. Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    const retorno2 = createMenu({ food: {}, drinks: {} }).fetchMenu();
    expect(retorno2).toHaveProperty('food');
    expect(retorno2).toHaveProperty('drinks');
    
    // 3. Escreva um teste que verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(retorno1.fetchMenu()).toEqual(retorno2);

    // 5. Escreva um teste que verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio.
    expect(retorno1.consumption).toHaveLength(0);

    // 7. A função createMenu retorna um objeto. Certo? Esse objeto até aqui já possui algumas chaves(keys). Nosso objeto retornado pela função createMenu tem essa aparência:
    // {
    //   fetchMenu: () => [Function: fetchMenu],
    //   consumption: [],
    // }
    // Agora precisamos que você escreva um teste levando em consideração que nosso objeto vai receber mais uma chave, que é order e essa chave tem como valor uma função.
    // Escreva um teste para a seguinte situação: caso o valor (que nesse caso é uma string) passada por parâmetro para order não conste no objeto passado como parâmetro para createMenu (nem em food ou drinks), o retorno da chave order deve ser:
    //     exibir a mensagem "Item indisponível";
    //     e não alterar a chave consumption.
    //     Caso o valor exista no objeto passado como parâmetro para createMenu o item deve ser adicionado ao array consumption.
    // Veja o exemplo abaixo:
    // const objetoRetornadoCreateMenu = createMenu(
    //  {food: {coxinha: 3.90, sanduiche: 9.90},
    //  drinks: {agua: 3.90, cerveja: 6.90}});
    // objetoRetornadoCreateMenu.order('coxinha')
    // objetoRetornadoCreateMenu.consumption // deve retornar ['coxinha']
    // objetoRetornadoCreateMenu.order('picanha') // deve retornar "Item indisponível".
    // objetoRetornadoCreateMenu.consumption // deve retornar ['coxinha']
    const retorno3 = createMenu(
      {
        food: {coxinha: 3.90, sanduiche: 9.90},
        drinks: {agua: 3.90, cerveja: 6.90}
      });

    retorno3.order('coxinha');
    expect(retorno3.consumption).toEqual(['coxinha']);
    expect(retorno3.order('picanha')).toBe('Item indisponível');
    expect(retorno3.consumption).toEqual(['coxinha']);

    // 9. Escreva um teste que verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos.
    const retorno4 = createMenu(
      {
        food: {coxinha: 3.90, sanduiche: 9.90},
        drinks: {agua: 3.90, cerveja: 6.90}
      });

      retorno4.order('coxinha');
      retorno4.order('agua');
      retorno4.order('cerveja');
    expect(retorno4.consumption).toEqual(['coxinha', 'agua', 'cerveja']);

    // 10. Escreva um teste que verifica se a função order aceita que pedidos repetidos sejam acrescidos a consumption.
    const retorno5 = createMenu(
      {
        food: {coxinha: 3.90, sanduiche: 9.90},
        drinks: {agua: 3.90, cerveja: 6.90}
      });
      
      retorno5.order('coxinha');
      retorno5.order('coxinha');
      expect(retorno5.consumption.length).toBe(2);

    // 11. Escreva um teste que verifica que, ao chamar a função pay() que será uma propriedade do objeto retornado pela função createMenu, deve retornar a soma dos preços de tudo que foi pedido, conforme registrado em consumption. A propriedade pay tem como valor uma função.
      expect(retorno5.pay()).toBe(8.58);
  });
});
