const factoryFunction = (name) => {
    return {
        logou: () => console.log(`O usuário ${name} logou`),
        deslogou: () => console.log(`O usuário ${name} deslogou`)
    }
}

factoryFunction('Vinícius').deslogou()