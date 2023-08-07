const numero = 10
const string = '20.9'
const numeroQuebrado = 18.8

//retornamos um número a partir de uma string
Number.parseFloat(string) //20

//retornando um número a partir de uma string, podendo definir a casa decimal
Number.parseInt(string, 10) //20

//arredonda um número com base nas casas decimais
numeroQuebrado.toFixed() //11

//retorna uma string a partir de um número
numero.toString() // '10'

//Math --> Objetivo nativo de JavaScript que possui métododos e propriedades de expreções matemáticas.

//retorna o valor absoluto
Math.abs(-5) // 5

//arredonda o valor para cima
Math.ceil(4.3) // 5

//arredonda o valor para baixo
Math.floor(4.9) // 4

//arredonda para o número mais próximo
Math.round(4.3) // 4

//retorna um número aleatório
console.log((Math.random() * 200).toFixed())

//retorna o mairo número dentro os listados
Math.max(2, 3, 7, 12) // 12

//retorna o menor número dentro os listados
Math.min(2, 3, 7, 12) // 2


const hoje = new Date()

hoje.getDate() // que dia é hoje

hoje.getMonth() // qual mês

hoje.getFullYear() // qual ano

hoje.getHours() // a hora

hoje.getMinutes() // os minutos

hoje.getDay() // dia da semana em inglês