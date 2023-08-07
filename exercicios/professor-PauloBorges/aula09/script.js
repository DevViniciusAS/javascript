const estoque = ['arroz', 'feijão', 'arroz', 'macarrão', 'batata', 'a']
const precos = [3.50, 5,  3.50, 2, 2.50, 0]
const pessoa = [{nome: 'Vinícius', idade: 31},{nome: 'Flávia', idade: 33}]

/*pessoa.forEach((valor, nome, index, array) => {
    console.log(valor, index, array)
})*/

/*const retornoMap = estoque.map((valor, index, array) => {
    return `${valor} ${index}`
})
console.log(retornoMap)*/

/*const total = precos.reduce((acc, valor, index, array) => {
    return acc + valor
}, 0)
console.log(total)*/

/*const resultado = estoque.find((valor, index, array) => {
    return valor
})
console.log(resultado)*/

/*const resultado = estoque.findIndex((valor, index, array) => {
    return valor
})
console.log(resultado)*/

/*const resultado = estoque.some((valor, index, array) => valor)
console.log(resultado)*/

/*const resultado = estoque.every((valor, index, array) => valor)
console.log(resultado)*/

const resultado = estoque.filter((valor, index, array) => valor === 'arroz')
console.log(resultado)