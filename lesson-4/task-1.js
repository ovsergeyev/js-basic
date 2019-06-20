'use strict';

let number = +prompt('Введите число от 0 до 999');

console.log(numTransformToObject(number));

/**
 * Функция конвертирует число от 0 до 999 в объект.
 * Функция выполняет одну проверку на входные данные, что number не больше 999.
 * @param {number} number
 * @return {object}
 */
function numTransformToObject(number) {
    const result = {};

    if (number > 999) {
        console.log('Необходимо ввести число до 999');
        return result;
    }

    //Получаем сотни
    result.numHundred = Math.trunc(number / 100);
    //Получаем десятки
    result.numDecade = Math.trunc((number % 100) / 10);
    //Получаем единицы
    result.numUnit = number % 10;

    return result;
}
