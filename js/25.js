//eventos del DOM - inputs

const inputNombre = document.querySelector('.nombre')
//inputNombre.type = 'password'

/*
inputNombre.addEventListener('input', function(){
    console.log('Escribiendo en el input')
})
*/

//cuando presionas
/*
inputNombre.addEventListener('keydown', function(){
    console.log('Escribiendo en el input')
})
*/

//cuando dejas de presionar
/*
inputNombre.addEventListener('keyup', function(){
    console.log('Escribiendo en el input')
})
*/

inputNombre.addEventListener('input', function(e){
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(){
    inputPassword.type = 'text'
    setTimeout(()=>{
        inputPassword.type = 'password'
    },100);
}
