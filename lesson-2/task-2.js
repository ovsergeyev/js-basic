var a = 2;
/*
Сначала значение переменной a увеличивается в 2 раза, т.е. до 4.
А потом в x кладется сумма переменной a и 1, то есть 5.
 */
var x = 1 + (a *= 2);

console.log(x);
