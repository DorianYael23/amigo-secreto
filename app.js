// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Agregar normbres a una lista y mostrarlos en pantalla despues de agregarlos

let amigos = [];
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre);
    console.log(nombre);
    limpiarCaja();
    actualizarLista();
  }
}

function actualizarLista() {
  // Obtener el elemento de la lista
  let lista = document.getElementById("listaAmigos");
  // Limpia la lista existente
  lista.innerHTML = "";
  // Itera sobre el arreglo y agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    let item = document.createElement("li"); 
    item.textContent = amigo; 
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista esta vacia')
  } else {
    let amigoAleatorio = Math.floor(Math.random()* amigos.length) ; 
    console.log(amigoAleatorio);
    // Obtiene el nombre sorteado
    let indice = amigos[amigoAleatorio];
    console.log(indice);
    
    // Mostrar el nombre sorteado en el elemento
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${indice}`
    }
}

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
