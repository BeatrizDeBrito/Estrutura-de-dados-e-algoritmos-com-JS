function isEven(x){
    console.log(x);
    return x % 2 == 0 ? true : false;
}

let numbers = [2,4,6,8,10,12,15]


// Verifica se todos os números do array são pares
let itera_ate_false = numbers.every(isEven); //itera até devolver false
console.log("Método every: " + itera_ate_false)

// Verifica se algum número do array é par
itera_ate_true = numbers.some(isEven); //itera até devolver true
console.log("Método some: " + itera_ate_true)

// Verifica se cada número do array é par
numbers.forEach(x => console.log(x % 2 == 0));// obtém o mesmo resultado de um laço for

//devolve novo array como r esultado
const myMap = numbers.map(isEven);
console.log(myMap)
console.log(myMap[0]);
console.log(myMap[6]);