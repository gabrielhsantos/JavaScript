const _ = require('lodash') // usual criar uma constante _ para o lodash
setInterval(() => console.log(_.random(50, 60)), 2000)

/*
    EXPLICAÇÃO

    'lodash' possui uma pasta com o nome index.js
    que dentro do arquivo, possui um module.exports
    indicando que toda a pasta ./lodash está explicita

    no parâmetro de setInterval(), há uma função 
    que terá uma mensagem na tela 

    random() é uma função lodash referenciada pela
    constante "_", que recebe um valor inicial e um valor final(-1)

    a cada 2 segundos(2000), o random irá escolher um número entre 
    os de seu parâmetro e jogar para a função dentro de setInterval()

*/