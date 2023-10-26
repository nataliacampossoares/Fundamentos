const maximo = (a,b) => {
    if (a>b) {
        return a
    }
    else {
        return b
    }
}
let maior = maximo(10,30)
console.log(maior)

const minimo = (a,b) => {
    return a<b ? a:b
}

let menor = minimo(40,60)
console.log(menor)




let num = 2
let string1 = "2 x " + num + " = " + (2*num)
console.log(string1)