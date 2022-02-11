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
// 
