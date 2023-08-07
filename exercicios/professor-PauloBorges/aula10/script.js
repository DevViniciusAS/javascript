function retornaName(name, age) {
    console.log(name, age, this.profissao, this.cidade)
}

retornaName.length // 2
retornaName.name // retornaName

// Principais Métodos

//retornaName.call({profissao: 'Programador', cidade: 'CamposRJ'}, 'Vinícius', 31) // executa a função podendo passar um novo valor para this
//retornaName.apply({profissao: 'Programador', cidade: 'CamposRJ'}, ['Vinícius', 31]) // executa a função podendo passar um novo valor para this, agora com os argumentos são passados por um array
const novaFuncao = retornaName.bind({profissao: 'Programador', cidade: 'CamposRJ'}, 'Vinícius', 31) // retorna a função podendo passar um novo valor para this
novaFuncao()