function Calculadora(display) {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.cliqueBotoes()
        this.pressEnter()
    }

    this.realizaConta = () => {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (!conta) {
                alert('Conta Inválida')
                return
            }
            this.display.value = conta
        } catch (error) {
            alert('Conta Inválida')
            return
        }
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const elemento = e.target
            if (elemento.classList.contains('btn-num') || elemento.classList.contains('btn-op')) {
                this.botaoDigitado(elemento.innerText)
            }
            if (elemento.classList.contains('btn-clear')) {
                this.limpar()
            }
            if (elemento.classList.contains('btn-apagar')) {
                this.apagaUltimoCaracter()
            }
            if (elemento.classList.contains('btn-eq') && this.display.value) {
                this.realizaConta()
            }
        })
    }

    this.botaoDigitado = botao => {
        this.display.value += botao
        this.display.focus()
    }

    this.pressEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13 && this.display.value) {
                this.realizaConta()
            }
        })
    }

    this.limpar = () => this.display.value = ''

    this.apagaUltimoCaracter = () => this.display.value = this.display.value.slice(0, -1)
}

const calculadora = new Calculadora()
calculadora.inicia()