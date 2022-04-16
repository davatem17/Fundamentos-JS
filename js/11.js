//Iteradores en JS

const tecnologias = ['Html', 'CSS', 'JavaScript', 'React', 'Node.js']

//forEach - Acceder a cada elemento del array pero no puede crear otro array
const arrayForeach = tecnologias.forEach(function(tech){
    return tech
})

//Map - Crear un nuevo array y acceder a cada elmento
const arrayMap = tecnologias.map(function(tech){
    return tech
})
console.log(arrayForeach)
console.log(arrayMap)