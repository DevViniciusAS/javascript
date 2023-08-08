const minhaPromise = new Promise((resolve, reject) => {
    let condicao = false
    if(condicao) {
        resolve('Resolvido')
    } else {
        reject('Um error aconteceu na nossa Promise')
    }
})

// then e o catch


minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})

