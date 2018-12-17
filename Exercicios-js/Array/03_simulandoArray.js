const quaseArray = {
    0: 'Thomas', 
    1: 'Ana',
    2: 'Gabriel'
}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false    
})

console.log(quaseArray[0]) // acessando através do atributo 0, como em um índice

const meuArray = ['Thomas', 'Ana', 'Gabriel']
console.log(quaseArray.toString(), meuArray)

