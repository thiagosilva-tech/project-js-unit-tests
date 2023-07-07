/* eslint-disable max-len */
// Siga as orientações do README!

// 4. Agora vamos começar a desenvolver a nossa função createMenu()! Vá até o arquivo restaurant.js.
// A função createMenu deve receber um objeto como parâmetro e retornar um outro objeto, contendo outras propriedade que iremos desenvolver nos tópicos abaixo.
// Passe um parâmetro para função createMenu, esse parâmetro será um objeto. Depois disso, a função createMenu deve retornar um objeto onde uma das chaves é fetchMenu, o valor dessa chave é uma função e essa função retorna o objeto passado como parâmetro para createMenu.

const createMenu = (object) => {
  const menu = {
    fetchMenu() {
      let fetchMenu = {
        food: {},
        drinks: {},
      };
      if (object) {
        fetchMenu.food = object.food;
        fetchMenu.drinks = object.drinks;
      }
      return fetchMenu;
    },
    consumption: [],
    order(item) {
      if (menu.fetchMenu().food[item] || menu.fetchMenu().drinks[item]) {
        menu.consumption.push(item);
        return menu.consumption;
      }
      return 'Item indisponível';
    },
    pay() {
      let soma = 0;
      const menuFood = menu.fetchMenu().food;
      const menuDrinks = menu.fetchMenu().drinks;
      this.consumption.forEach((item) => {
        if (menuFood[item]) {
          soma += menuFood[item];
        } else if (menuDrinks[item]) {
          soma += menuDrinks[item];
        }
      });
      return soma * 1.1;
    },
  };
  return menu;
};

module.exports = createMenu;
