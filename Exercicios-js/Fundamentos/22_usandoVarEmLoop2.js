const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

/*
EXPLICAÇÃO

por ser um var, não possui corpo.
sendo assim ele não respeita a função imposta mostrando sempre a 
variável atribuida à última posição, no caso 10
*/

