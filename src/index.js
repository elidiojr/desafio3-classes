/* Desafio DIO #3 - Escrevendo as classes de um jogo

/* tipo: guerreiro, mago, monge, ninja */
/* usando: espada, magia, artes marciais, shuriken */

class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque = ""
        const tipo = ["guerreiro", "mago", "monge", "ninja"]
        const tipoUso = ["espada", "magia", "artes marciais", "shuriken"]
        for(let i=0; i<=3; i++) {
            if (tipo[i] === this.tipo) {
                ataque = tipoUso[i]
                break
            }
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroiGuerreiro = new Heroi("Thiago",21,"guerreiro");
heroiGuerreiro.atacar();

let heroiNinja = new Heroi("Marcelo",22,"ninja");
heroiNinja.atacar();

let heroiMonge = new Heroi("Joana",23,"monge");
heroiMonge.atacar();

let heroiMago = new Heroi("Charles",24,"mago");
heroiMago.atacar();

