const autenticado = false

autenticado ? console.log('usuario autenticado'): console.log('no autenticado')

//doble ternario
const saldo = 600
const pagar = 700
const tarjeta = true

saldo>pagar ? 
    console.log('puedes pagar') : 
    tarjeta ? 
        console.log('pagar con tarjeta') :
        console.log('no puedes pagar')