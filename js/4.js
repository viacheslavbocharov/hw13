// 4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.


let userStr = prompt("Enter your string")
let charsToRemoveFromUser = getCharsToRemoveFromUser()
let userClearStr = findAndRemoveChar(userStr, charsToRemoveFromUser)

console.log(userStr)
console.log(userClearStr)
alert(`Before: "${userStr}" - After: "${userClearStr}"`)