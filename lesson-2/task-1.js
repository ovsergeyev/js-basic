var a = 1, b = 1, c, d;
/*
Префиксный оператор инкремента.
Сначала прибавляем к переменной единицу а потом присваиваем это переменной c.
 */
c = ++a; console.log(c);
/*
Постфиксный оператор инкремента.
Сначала присваивается переменной с значение переменной b.
А потом к переменной b прибавляем единицу.
 */
d = b++; console.log(d);
/*
Префиксный оператор инкремента увеличивает значение переменной a до 3.
Потом в переменную с попадает сумма переменной a и числа 2.
 */
c = (2+ ++a); console.log(c);
/*
Сначала суммируется значение переменной b и число 2.
Результат присваивается переменной d.
Потом производится операция инкремента.
 */
d = (2+ b++); console.log(d);
/*
Изначально значение переменной a было равно 1.
После 2 операций инкремента стало 3.
 */
console.log(a);
/*
Изначально значение переменной b было равно 1.
После 2 операций инкремента стало 3.
 */
console.log(b);
