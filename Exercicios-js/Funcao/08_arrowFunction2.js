function Pessoa() {
    this.idade = 0

    setInterval(() => { // neste caso o this não irá variar
        this.idade++
        console.log(this.idade)
    }, 1000)

}

new Pessoa

