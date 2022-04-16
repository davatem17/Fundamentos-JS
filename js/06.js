//objetos - Destructuring con 2 o mnas objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const usuario = {
    nombre: "David",
    premium: true
}
const{nombre, precio, disponible} = producto
const{nombre: nombreUsuario, premium} = usuario
console.log(nombre, precio, disponible)
console.log(nombreUsuario, premium)