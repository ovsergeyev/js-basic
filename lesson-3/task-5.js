'use strict';

for (let i = 1; i <= 20; i++) {
    console.log(getX(i));
}

/**
 * Функция возвращает строку с заданным количеством 'x'
 * @param {number} count - сколько х должно быть в строке
 * @returns {string}
 */
function getX(count) {
    let result = 'x';

    for (let i = 1; i < count; i++) {
        result = result + 'x';
    }

    return result;
}
