const salfo = 600
const pagar = 700
const tarjeta = true

/* 
||  al menos se debe cumplir una
&& todas deben cumplirse
*/
if(salfo >pagar || tarjeta){
    console.log('puedes pagar')

}else{
    console.log('no puedes pagar')
}