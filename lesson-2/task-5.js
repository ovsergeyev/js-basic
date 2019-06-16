var num1 = 8;
var num2 = 2;

//Function Declaration. Классическое объявление функции.
function summ(a, b) {
    return a + b;
}
//Function Declaration. Классическое объявление функции.
function diff(a, b) {
    return a - b;
}
//Function Expression. Функциональное выражение.
var del = function (a, b) {
    return a / b;
};
//Стрелочная функция
var multiply = (a, b) => {
    return a * b;
};

console.log(summ(num1, num2));
console.log(diff(num1, num2));
console.log(del(num1, num2));
console.log(multiply(num1, num2));
