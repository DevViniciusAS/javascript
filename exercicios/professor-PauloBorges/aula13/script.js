

// uma variável criada fora pode ser acessada dentro de uma função

const valor = 'Vinicius'

function teste() {
    console.log(valor)
}

console.log(teste())