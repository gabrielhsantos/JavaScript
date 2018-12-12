let numero = 1 
{
let numero = 2
console.log('Dentro = ' + numero) // procura no escopo interno, se n tiver, usa a do escopo maior
}
console.log('Fora = ' + numero) // Erro, pois o let tem o escopo apenas dentro do bloco


