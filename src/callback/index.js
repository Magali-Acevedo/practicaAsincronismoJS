
function sum(numero1 , numero2) {
    return numero1 + numero2;
}
// Aclaración el nombre de la función puede ser cualquiera
function calcular(numero1 , numero2 , callback) {
    return callback(numero1, numero2);
}

console.log(calcular(4,2,sum));

//Ejecutar en un tiempo determinado
//1

setTimeout(function(){
    console.log('Hola');
}, 2000)

//2

function gretting(name) {
    console.log(`Hola ${name}`);
}
//setTimeout( funcion a ejecutar , tiempo en seg , argumentos que va a recibir ); 
setTimeout(gretting, 2000 , 'Magali');  

