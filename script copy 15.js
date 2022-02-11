const array =['Danila', 'Alexey', 'Mihail', 'Yana', 'Irina', 'Sergey', 'Ekaterina', 'Ivan']
const newArr = array.map((item, index, arr) => {
    return item + ' developer'
})
console.log(newArr)