function Pessoa() {
    this.idade = 0

    const self = this // armazena o this referente ao  própria função em uma constante

    setInterval(function () { //temporizador que irá disparar
        self.idade++
        console.log(self.idade) // usando a constante, retira o conflito da variação do this
    }/*.bind(this)*/, 1000) // a cada 1 segunda (1000), a função anonima irá imprimir na tela a variável incrementada

}

new Pessoa // Instancia da função Pessoa, não precisa de () pois não há parâmetros e a função anônima irá rodar automaticamente








