let listaDeAmigos = [];

function agregarAmigo() {
  const inputNombre = document.getElementById('amigo');
  const nombre = inputNombre.value;
  if (nombre.trim() !== "") {
    listaDeAmigos.push(nombre.trim());
    console.log(`Nombre agregado: ${nombre}`);
    mostrarLista();
    inputNombre.value = ""; // Limpia el campo de texto después de agregar
  } else {
    alert("El campo de nombre no puede estar vacío.");
    console.log("El nombre no puede estar vacío.");
  }
}

function mostrarLista() {
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = ""; // Limpia la lista visual

  listaDeAmigos.forEach((nombre, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${nombre}`;
    listaElement.appendChild(listItem);
  });
}

function sortearAmigo() {
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = ""; // Limpia el resultado previo

  if (listaDeAmigos.length === 0) {
    console.log("La lista está vacía. Agrega nombres antes de hacer el sorteo.");
    const mensaje = document.createElement('li');
    mensaje.textContent = "La lista está vacía. Agrega nombres antes de hacer el sorteo.";
    resultadoElement.appendChild(mensaje);
  } else {
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];
    console.log(`El nombre sorteado es: ${nombreSorteado}`);

    const ganador = document.createElement('li');
    ganador.textContent = `El nombre sorteado es: ${nombreSorteado}`;
    resultadoElement.appendChild(ganador);
  }
}
// Agregar evento para capturar Enter en el input
document.getElementById('amigo').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      agregarAmigo();
    }
  });