const a = 1
const b = 2
const c = 3

const obj1 = {a: a, brocolis: b, c: c} // nomear os atributos
const obj2 = {a, b, c} // melhoria, os atributos já vem com o nome do parâmetro
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr //nomeou o atributo e setou um valor a ele
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // forma antiga
    },
    funcao2() {
        // forma antiga
    }
}
console.log(obj5)

