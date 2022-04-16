//objetos manipulacion

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
//No permite añadir o eliminar o modificar mas propiedades
Object.freeze(producto)
//Permite editar las propiedades pero no añadir ni eliminar
Object.seal(producto)
//Reescribir un valor
producto.nombre = "Monitor Curvo"
//si no existe lo va añadir
producto.imagen = "imagen.jpg"
//eliminar propiedades
delete producto.calificaciones
console.table(producto)