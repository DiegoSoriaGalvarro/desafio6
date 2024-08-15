let cantidadDeGatos=prompt('Ingrese cantidad de Gatos');
let cantidadDePasos=prompt('Ingrese cantidad de Pasos');

if ( cantidadDeGatos < 1 )  
    console.log(cantidadDeGatos + ' es una Cantidad GATOS DESCONOCIDA');

if ( cantidadDePasos < 1 )  
    console.log(cantidadDePasos + ' es una Cantidad PASOS DESCONOCIDA');


let emoji_pasos= []

console.log('Ejercicio c:');

// Completar el array con la cantidad de  '🐾'
for (var j = 0; j < cantidadDePasos; j++) {
    emoji_pasos.push('🐾');
  }

for ( var i=1 ; i<=cantidadDeGatos ; i++){
    
    if(i % 2 == 0) console.log('Gato #'+ (i) +':'+ '🐈' +'⬛'+ emoji_pasos.join(' '));
    else if(i % 2 != 0) console.log('Gato #'+ (i) +':'+ '🐈' + emoji_pasos.join(' ')); // .join( ' ') para sacar las comas entre 🐾
     

}