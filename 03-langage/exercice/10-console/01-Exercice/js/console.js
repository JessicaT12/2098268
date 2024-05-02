'use strict'

const temperature = 21.3
const fruits = ['pomme', 'poire', 'orange']
const chiffre = 18

console.clear()
console.log("Salut.")
console.log(temperature)
console.log(fruits)
console.log("La Temperature est: ", temperature)  
console.log("La collection de fruit est: " , fruits)
console.log("<h1> Pas d'interpreteur HTML </h1>")
console.log(chiffre, "dis-huit",true, null, undefined)
console.group("Ceci est un groupe a part")

console.log("Contenu du groupe")

console.groupEnd()

console.group("Ceci est un second group a part")

console.log("Contenu du second groupe")

console.groupEnd()
