var a = 10;
var b = 7;

//Простое условие.
if (a > 0 && b > 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else if (a < 0 && b > 0 || a > 0 && b < 0) {
    console.log(a + b);
}
