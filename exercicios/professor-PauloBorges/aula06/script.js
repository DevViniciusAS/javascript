class Mamifero() {
    constructor(patas) {
        this.especie = 'Mamíferos'
    }

    dormir() {
        alert('esse mamífero dormiu')
    }
}

class Pessoa {
    constructor(name, idade){
        super(patas)
        this.name = name
        this.idade = idade
        this.cidade = 'Rio de Janeiro'
    }

    dormir() {
        super.dormir()
    }

    andou() {
        alert(`${this.name} andou`)
    }
}

const pessoa1 = new Pessoa('Vinícius', 31)