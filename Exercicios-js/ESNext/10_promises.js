// Usa-se quando é preciso um tipo de processamento assincrono
// podendo ser atendido ou regeitado de acordo com a situação

function falarDepoisDe(segundos, frase) { //quantos segundos/imprimir a frase
    //return new Promise(resolve => { // função resolve é chamado quando a promessa é atendida
    return new Promise((resolve, reject) => { // objeto recebe um callback. 
        setTimeout(() => { // simulando um delay
            resolve(frase) // em função de sucesso retorna a frase...(aceita um único parâmetro)
        }, segundos * 1000) // ...a cada 1 segundo
    })    
}

falarDepoisDe(3, 'Que Legal!')
.then(f => f.concat('?!?')) // função then() é chamada quando resolve a promisse 
.then(oF => console.log(oF))
//.catch(frase => console.log(frase)) // caso seja um reject no lugar de um resolve

console.log('Vou Antes!!!!') // irá ser impressa antes, pois o promise é assincrono 

