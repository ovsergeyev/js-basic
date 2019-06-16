'use strict';

const arr = [];

for (let i = 0; i < 100; i++) {
    if (isPrimeNumber(i)) {
        arr.push(i);
    }
}

console.log(arr);

/**
 * Функция проверяет является ли число простым
 * @param {number} number.
 * @returns {boolean}
 */
function isPrimeNumber(number) {
    //2 - наименьший возможный делитель не простого числа.
    //поэтому нет смысла перебирать значения больше половины
    //проверяемого числа.
    let divider = parseInt(number / 2);
    //1 - не простое число
    if (number <= 1) {
        return false;
    }

    while (divider > 1) {
        if ((number % divider) === 0) {
            return false;
        }
        divider--;
    }
    return true;
}
