// 1. Задача на if
// Дана целочисленная переменая count - количесво верных ответов.
// В зависимости от значения этой переменнной вывести в консоль оценку:
// 100 - 90 правильных ответов - отлично
// 89 - 60 правильных ответов - хорошо
// 59 - 40 правильных ответов - удовлетворительно
// 39 - 0 правильных ответов - попробуй потом

let count = 86;
if (count <= 100 && count >= 90) {
    console.log('отлично');
} else if (count <= 89 && count <= 60) {
    console.log('хорошо');
} else if (count <= 59 && count <= 40) {
    console.log('удовлетворительно');
} else if (count <= 39 && count >= 0) {
    console.log('попробуй потом');
} else {
    console.log("неверное число")
}



// // 2. Задача на switch
// // Пользователь вводит 3 числа:
// // 1е - первый операнд
// // 2e - второй операнд
// // 3е - оператор
// // В зависимости от третьего введенного числа нужно вывести в консоль:
// // сумму, разность, умножение, деления чисел, которые ввел пользователь.
// // Если 3е введенное число 3, нужно найти сумму,
// // если 5 - разность,
// // если 7 - результат умножения,
// // если 9 - результат деления.

let num1 = +prompt("Первый операнд");
let num2 = +prompt("Второй операнд");
let operator = +prompt("Введите номер (3-сумма; 5-разность; 7-умножение; 9-деление");

switch(operator){
    case 3:
        console.log(num1 + num2);
        break;
    case 5:
        console.log(num1 - num2);
        break;
    case 7:
        console.log(num1 * num2);
        break;
    case 9:
        console.log(num1 / num2);
        break;
}

// 3. Задача на Math.random() и if
// Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [10;500]
// в интервал (25;200) и выводить результат в консоль.
// Примеры работы программы:
// Число 345 не содержится в интервале (25;200)
// Число 110 содержится в интервале (25;200)

let a = Math.floor(Math.random() * 500 + 10);
if (a > 25 && a < 200) {
    console.log("число" + a + "входит в диапазон");
} else {
    console.log("число" + a + "не входит в диапазон")
}


// 4. Задача на цикл for:
// Вывесити в консоль первые 20 элементов последовательности 2 4 6 8 10 12 ...

for (let i = 1; i <= 20; i++){
    let num = i * 2;
    console.log(num);
}

// 5. Задача на циклы: for или while
// Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов.
// Числа Фибоначчи – это элементы числовой последовательности
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …, в которой каждое последующее число равно сумме двух предыдущих.

let fib1 = 0;
let fib2 = 1;
let n = 10;
for(let i = 0; i <= n; i++){
    let cf = fib1 + fib2;
    f1 = f2;
    f2 = cf;
    console.log(cf);
}

// 6. Задача на 2 цикла for
// Вывести в консоль таблицу умножения.
// Пример вывода:
// 1*1=1
// 2*1=2
// 3*1=3
// 4*1=4
// 5*1=5
// 6*1=6
let n = 2;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}*${j}=${i * j}`);
       
    }
}




// 7.* На цикл while 
// Пользователь!!! загадывает число в диапазоне от [1 до 100]
// Программа пытается его угадать (используйте метод !!!бинарного поиска - деление отрезка на 2).
// Программа может задавать пользователю вопросы:
// Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.
// Вместо текстовых ответов ДА/НЕТ, можно использовать числа 0 - НЕТ и 1 - ДА

// let minimum = 1, maximum = 100; // пользователь задает мин и макс число
// while (true) { 
    // tmp minimum + maximum / 2
    // answer число равно tmp? break
    // если answer равно 1 -> break
    // asnwer = это число меньше tmp?
    // если answer равно 1 -> maximum = tmp
    // если answer равно 0 -> minimum = tmp

//}