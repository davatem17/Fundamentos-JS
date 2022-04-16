//tipos de array methods
const tecnologias = ['Html', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10,20,30]
let nuevoArray
//Filter
nuevoArray = tecnologias.filter(tech=>tech === 'Node.js') 

console.log(nuevoArray)

//comprobar si un elemento existe en el array
//const resultado = tecnologias.includes('React')
//devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero=>numero>15)
//find - devuelve el primer elemento que cumple la condicion
//const resultado = numeros.find(numero=>numero>15)

//Every - retorna true o false si todos cumplen la condicion
//const resultado = numeros.every(numero=>numero>15)

//Reduce - Acumulando en el total
//const resultado = numeros.reduce((total, numero)=> numero + total, 0)

//Filter Crea un nuevo array en base a una condicion
//const resultado = tecnologias.filter(tech => tech=== 'Node.js')

//const resultado = numeros.filter(numero => numero >15)
//for each cuando solo quieres iterar y map cuando quieres retornar en un neuvo arreglo
tecnologias.forEach((tech,index)=> console.log(index))

const arrayMap = tecnologias.map(tech=>tech)

console.log(arrayMap)