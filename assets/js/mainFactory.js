const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.pressEnter()
        },

        realizaConta() {
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
        },

        cliqueBotoes() {
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
                }) // para apontar o retorno do valor p o valor a calc, se n ele estaria pegando o valor de document
        },

        botaoDigitado(botao) {
            this.display.value += botao
        },

        pressEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13 && this.display.value) {
                    this.realizaConta()
                }
            })
        },

        limpar() {
            this.display.value = ''
        },

        apagaUltimoCaracter() {
            this.display.value = this.display.value.slice(0, -1)
        },
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()