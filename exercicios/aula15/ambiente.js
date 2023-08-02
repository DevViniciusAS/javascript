var num = [5 ,4 ,7 ]
num[3] = 6
num.push(7)
num.sort() // ordena os valores ordem crescente
console.log(`${num}`)
res = num.length
console.log(`O vetor tem ${res} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}

