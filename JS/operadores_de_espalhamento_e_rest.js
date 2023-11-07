function restParameterFunction(x, y, ...a){
    return (x + y) * a.length;
}

console.log(restParameterFunction(1, 2, 'hello', true, 7))