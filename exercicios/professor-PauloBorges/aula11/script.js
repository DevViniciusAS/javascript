const dados = {
    name: 'Vinícius',
    idade: 31
}

const profissao = {
    prof: 'Programador',
    stack: 'JavaScript'
}

const endereco = {
    cidade: 'Campos',
    estado: 'RJ',
    ...dados,
    ...profissao
}

//Object.assign(endereco, dados)
//console.log(Object.keys(endereco))
console.log(Object.values(endereco))