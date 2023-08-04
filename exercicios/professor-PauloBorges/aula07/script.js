const pessoa = {
    nome: 'Vinícius',
    idade: 31,
    endereco: {
        cidade: 'Campos',
        estado: 'RJ'
    }
}

const {nome, idade = 0, endereco:{cidade, estado}, endereco} = pessoa
console.log(nome, idade, cidade, estado)