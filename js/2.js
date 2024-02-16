// 2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.


let numberXFromUser = getNumberFromUser("Enter number X");
let numberYFromUser = getNumberFromUser("Enter number Y");
let mathActionFromUser;
while (!(mathActionFromUser === '+' || mathActionFromUser === '-' || mathActionFromUser === '*' || mathActionFromUser === '/' || mathActionFromUser === '%' || mathActionFromUser === '^')) {
    mathActionFromUser = getStringFromUser("Enter one of these actions: +, -, *, /, %, ^");
}
let mathActionResult = doMath(numberXFromUser, mathActionFromUser, numberYFromUser);
console.log(`${numberXFromUser} ${mathActionFromUser} ${numberYFromUser} = ${mathActionResult}`)
