console.log('Inicio de programa');// sincronos .. se ejecuta primero
setTimeout( () => {
    console.log('Primer Timeout'); 
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); // asincronos
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout');
}, 0 );


console.log('Fin de programa');