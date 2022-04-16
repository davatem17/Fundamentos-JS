//Operaciones en los arreglos

const tecnologias = ['Html', 'CSS', 'JavaScript', 'React', 'Node.js']

//añadir elementos al array
//tecnologias.push('GraphqL') //añade al fianl del array
//tecnologias.unshift('GraphqLl') //añade al principio del array
const nuevoArreglo = [...tecnologias, 'GraphQL'] //al final
const nuevoArreglo = ['GraphQL', ...tecnologias] //al principop

//eliminar elementos del array
//tecnologias.pop() //elimina del final
//tecnologias.shift() //elimina del incio
//tecnologias.splice(2,1) //elimina una posicion en especifico
const nuevoArray = tecnologias.filter(function(tech){
    return tech !== 'Node.js'
})

//Reemplazar del array
//tecnologias[0]= "GraphQL"
const nuevoArray2 = tecnologias.map(function(tech){
    if(tech === "Html"){
        return "GraphQL"
    }else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray2)