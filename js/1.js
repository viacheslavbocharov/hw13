// 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = ['text1', 60, true, 'text2', 10, 5, 'text3']

function getArithmeticMeanFromArr(array) {
    
    let sum = 0;
    let counter =0;
    let res = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            counter++
            sum += array[i];
            res = sum / counter;
        }
    }
    
    return res;
}

let arrayArithmeticMean = getArithmeticMeanFromArr(arr);

console.log(arrayArithmeticMean)