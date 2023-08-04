function pessoa(name, idade) {
    this.nome = name,
    this.idade = idade
}

const pessoa1 = new pessoa('Vinícius', 31)
//pessoa1.nome = 'Vinícius'
//pessoa1.idade = 22

console.log(pessoa1)

const pessoa2 = new pessoa('Flávia', 33)
//pessoa2.nome = 'Flávia'
//pessoa2.idade = 33

console.log(pessoa2)