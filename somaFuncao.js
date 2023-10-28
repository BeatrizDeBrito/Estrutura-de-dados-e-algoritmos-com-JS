function sum (x, y, z){
    var x = arguments.length > 0 && arguments[0]  !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1]  !== undefined ? arguments[1] : 2;
    var z = arguments.length > 0 && arguments[2]  !== undefined ? arguments[2] : 3;


    return x + y + z;
}
console.log(sum(4, 2))