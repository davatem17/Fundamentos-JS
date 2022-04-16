//objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring
const{nombre, precio, disponible, imagen} = producto
console.log(nombre)

//Object Literal Enhacement
const autenticado = true
const usuario = "David"

const nuevoObjeto = {
    autenticado,
    usuario
}
console.table(nuevoObjeto)