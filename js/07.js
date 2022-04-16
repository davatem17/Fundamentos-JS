//Unir 2 objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const usuario = {
    nombre: "David",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, usuario) //No porque modifican propiedades
const nuevoObjeto = {...producto, ...usuario}
const nuevoObjeto2 = {
    producto: {...producto},
    usuario: {...usuario}
}
console.log(nuevoObjeto)
console.log(nuevoObjeto2)