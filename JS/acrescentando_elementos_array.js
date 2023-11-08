let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numbers)

numbers.push(10)
console.log(numbers)

numbers.pop(10)
console.log(numbers)

numbers.unshift(200) //adiciona no primeiro elemento
console.log(numbers)

numbers.shift(200) //remove no primeiro elemento
console.log(numbers)

numbers.unshift(200)
console.log(numbers)

numbers.splice(0,5) //a partir do índice 0, remove 5 elementos
console.log(numbers)