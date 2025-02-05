// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agregar normbres a una lista y mostrarlos en pantalla despues de agregarlos

let nombreDeAmigos = [];
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    nombreDeAmigos.push(nombre);
    console.log(nombre);
    limpiarCaja();
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}