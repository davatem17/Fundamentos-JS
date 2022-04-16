//Funciones - Function Expression debe ser llamada despues de ser declarada no antes
/*
const sumar = function(numero, numero2){
    console.log(numero+numero2)
}
sumar(30, 20)
*/
const sumar = function(numero, numero2){
    return numero+numero2
}
const resultado = sumar(30, 20)
console.log(resultado)