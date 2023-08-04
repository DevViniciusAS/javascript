function Game()  {
    this.pulou = () => console.log(`O personagem pulou`)
    this.deitou = () => console.log(`O personagem deitou`)
}

Game.prototype.correu = () => console.log(`O personagem correu`)

const novoJogo = new Game()

const meuJogo ='fifa'

console.log(meuJogo.toUpperCase())

