let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // no caso do browser, global = window
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// Com a função Arrow
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)


// usando bind dentro do Arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)


