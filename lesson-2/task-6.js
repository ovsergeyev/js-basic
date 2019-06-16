/**
 * Возвращает результат математической операции
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation Возможные значения summ, diff, del, multiply
 * @return {number}
 */
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'summ':
            return summ(arg1, arg2);
        case 'diff':
            return diff(arg1, arg2);
        case 'del':
            return del(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
        default:
            return NaN;
    }
}

console.log(mathOperation(8, 2, 'multiply'));


function summ(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function del(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}
