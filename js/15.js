const tecnologias = ['Html', 'CSS', 'JavaScript', 'React', 'Node.js']

/*
const nuevoArray = tecnologias.map(tech=>{
    if(tech === "Html"){
        return "GraphQL"
    }else {
        return tech
    }
})
*/


const nuevoArray2 = tecnologias.filter(tech=>tech === 'Node.js') 

console.log(nuevoArray2)


