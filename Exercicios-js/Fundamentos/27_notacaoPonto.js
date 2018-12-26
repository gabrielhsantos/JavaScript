console.log(Math.ceil(6.1)) //arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola'

console.log(obj1.nome)

function Obj(name) {
    this.nome = name
    this.etc = function() {
        console.log('Etc...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.etc()


