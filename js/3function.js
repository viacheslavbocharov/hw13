function getIntFromUser(requestToUser) {
    let res;
    do {
        res = parseInt(prompt(requestToUser))
    } while (isNaN(res));
    console.log(res)
    return res;
}


function getIntArrFromUser(arrLength, requestToUser) {
    let arr = []
    for (let i = 0; i < arrLength; i++) {
        arr.push(getIntFromUser(requestToUser))
    }
    return arr
}



function getTwoDimensionalArrayFromUser() {

    let userArrLength = getIntFromUser("How many elements contain main array?")

    let userArrElLength = [];
    userArrElLength = getIntArrFromUser(userArrLength, "Enter how many elements contain each array in the main array")

    const twoDimensionalArray = [];
    for (let i = 0; i < userArrLength; i++) {

        let arr = []
        for (let b = 0; b < userArrElLength[i]; b++) {
            arr.push(prompt(`Main array -> Array ${i + 1} -> Element ${b + 1}. Enter data:`))
        }       
        twoDimensionalArray.push(arr);
    }

    return twoDimensionalArray;
}