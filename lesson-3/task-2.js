'use strict';

const cart = [
    ['apple', 1, 105], //Наименование товара, вес, стоимость
    ['banana', 2, 57], //Наименование товара, вес, стоимость
    ['orange', 1, 62]  //Наименование товара, вес, стоимость
];

console.log(countBasketPrice(cart));

/**
 * Функция расчитывает стоимость корзины
 * @param {array} cart
 * @returns {number}
 */
function countBasketPrice(cart) {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
        result += cart[i][1] * cart[i][2];
    }
    return result;
}
