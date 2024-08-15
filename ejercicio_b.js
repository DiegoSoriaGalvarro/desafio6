var cantidadDeGatos=prompt('Ingrese cantidad de Gatos');
var cantidadDePasos=prompt('Ingrese cantidad de Pasos');

let emoji_pasos= []

console.log('Ejercicio b:');

// Completar el array con la cantidad de  '🐾'
for (let j = 0; j < cantidadDePasos; j++) {
    emoji_pasos.push('🐾');
  }

for ( var i=0 ; i<cantidadDeGatos ; ++i){
    
    console.log('Gato #'+ (i+1) +':'+ '🐈' + emoji_pasos.join(' ')); // .join( ' ') para sacar las comas entre 🐾
    
    
   
    

}