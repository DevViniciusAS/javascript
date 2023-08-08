import {  alerta, textoAlerta } from './module.js' 
// Quando importamos uma função default não precisamos das {}
import calc from './calc.js'

alerta(textoAlerta)

console.log(calc(2, 4))