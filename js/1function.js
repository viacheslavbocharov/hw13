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