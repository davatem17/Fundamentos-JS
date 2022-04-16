//Funciones - Function Declaration no importa si se llama antees o despues de la funcion
/*
sumar()
function sumar() {
    console.log(2+2)
}

function suma(numero, numero2){
    console.log(numero)
    console.log(numero2)
    console.log(numero + numero2)
}
suma(10,20)
*/
/*
function sumar(numero=0, numero2=0){
    return [numero + numero2, 'Hola Mundio']
}
const [resultado, hola] = sumar(20,30)
console.log(resultado)
console.log(hola)
*/
function sumar(numero=0, numero2=0){
    return {
        resultado: numero + numero2, 
        mensaje: 'Hola Mundio'
    }
}
const {resultado, mensaje} = sumar(20,30)
console.log(resultado)
console.log(mensaje)
