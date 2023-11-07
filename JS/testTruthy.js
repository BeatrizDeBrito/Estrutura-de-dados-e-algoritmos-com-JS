var nome = 'Maria'

function testTruhy(val){
    return val ? console.log('truthy') : console.log('falsy')
}

testTruhy(true)
testTruhy(false)
testTruhy(new Boolean(false)) // obj sempre true
testTruhy('') // string vazia (tam 0) --> false
testTruhy(nome) // string (tam >=1) --> true
testTruhy(new String(''))  // obj sempre true
testTruhy(1)
testTruhy(-1)
testTruhy(NaN)
testTruhy({}) // obj sempre true