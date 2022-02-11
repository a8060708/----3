const array =  [100, 200, 500, 1, -60, 38, 3434]

// сортировка по возрастанию
console.log(array.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1
}))

// // сортировка по убыванию
console.log(array.sort((a, b) => {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1
}))
// среднее арифметическое
let result = array.reduce((sum, current) => sum + current, 0)
console.log(result/array.length)

// максимальное
let newArr1 = array.sort((a, b) => {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1
})
console.log(newArr1[0])
// минимальное
let newArr2 = array.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1
})
console.log(newArr2[0])

//удаление по индексу
let res =array.splice(0,3)
console.log(res) // выводим что именно удалили
console.log(array) // выводим массив с удаленными 



