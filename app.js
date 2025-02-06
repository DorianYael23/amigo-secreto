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

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    let item = document.createElement("li"); // Crear un elemento <li>
    item.textContent = amigo; // Asignar el nombre del amigo al <li>
    lista.appendChild(item); // Agregar el <li> a la lista
  }
}

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}
