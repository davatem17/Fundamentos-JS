//manipular elementos html con js

const heading = document.querySelector('.heading')

heading.textContent = 'Un nuevo Heading'

console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value='un valor por default'
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace=>enlace.textContent = 'Nuevo Enlace')
