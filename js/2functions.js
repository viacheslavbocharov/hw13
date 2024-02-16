function doMath(x, znak, y) {
    let res;
    switch (znak) {
        case '+':
            res = x + y;
            break;

        case '-':
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;
        case '%':
            res = x % y;
            break;
        case '^':
            res = Math.pow(x, y);
            break;
        default:
            break;
    }
    return res;
}

function getNumberFromUser(textForUser) {
    let res;
    do {
        res = parseFloat(prompt(textForUser));
    } while (isNaN(res));
    return res;
}

function getStringFromUser(textForUser) {
    let res = prompt(textForUser);
    return res;
}