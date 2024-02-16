function getCharsToRemoveFromUser() {

    let res;
    do {
        res = parseInt(prompt(`How many characters you want to remove from "${userStr}"?`))
    } while (isNaN(res));

    let arr = [];
    for (let i = 0; i < res; i++) {
        arr.push(prompt(`Enter ${i + 1} character you want to remove from "${userStr}":`))
    }
    return arr;
}


function findAndRemoveChar(str, charToRemove) {
    let arr = [...str];
    let clearArr = [];

    for (let i = 0; i < charToRemove.length; i++) {

        for (let b = 0; b < arr.length; b++) {
            if (arr[b] !== charToRemove[i]) {
                clearArr.push(arr[b])
            }
        }

        arr = []
        arr = [...clearArr]
        clearArr = []
    }

    let clearStr = arr.join("");
    return clearStr;

}