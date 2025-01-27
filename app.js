// Lista para guardar los nombres
let listaDeAmigos = [];

// Agregar un nombre a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  if (nombre.trim() !== "") {
    listaDeAmigos.push(nombre.trim());
    mostrarLista();
    input.value = "";
  } else {
    alert("Por favor, escribe un nombre.");
  }
}

// Mostrar la lista en la página
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  listaDeAmigos.forEach((nombre, index) => {
    let item = document.createElement("li");
    item.textContent = `${index + 1}. ${nombre}`;
    lista.appendChild(item);
  });
}

// Sortear un nombre al azar
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (listaDeAmigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
  } else {
    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let ganador = listaDeAmigos[indice];
    let item = document.createElement("li");
    item.textContent = `El nombre sorteado es: ${ganador}`;
    resultado.appendChild(item);
  }
}

// Detectar Enter para agregar directamente
document.getElementById("amigo").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
