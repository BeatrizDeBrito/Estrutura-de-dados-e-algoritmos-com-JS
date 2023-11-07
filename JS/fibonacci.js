const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)