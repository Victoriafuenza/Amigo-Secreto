// HTML estructura
const appHTML = `
<div>
    <h1>Amigo Secreto</h1>
    <img src="assets/amigo-secreto.png" alt="Imagen de Amigo Secreto" width="500" />
    <input type="text" id="nombre" placeholder="Ingresa un nombre" />
    <button id="adicionar">Adicionar</button>
    <ul id="listaNombres"></ul>
    <button id="sortear">Sortear Amigo</button>
    <p id="resultado"></p>
  </div>
`;

// Insert the HTML into the body
document.body.innerHTML = appHTML;

// Variables
const input = document.getElementById("nombre");

if (input instanceof HTMLInputElement) {
  // Ahora puedes usar `input` como un HTMLInputElement
  console.log(input.value);
}
const adicionarBtn = document.getElementById("adicionar");
const sortearBtn = document.getElementById("sortear");
const listaNombres = document.getElementById("listaNombres");
const resultado = document.getElementById("resultado");

// Array para almacenar los nombres
const nombres = [];

// Función para adicionar nombres
adicionarBtn.addEventListener("click", () => {
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);
  mostrarLista();
  input.value = "";
});

// Función para mostrar la lista de nombres
function mostrarLista() {
  listaNombres.innerHTML = "";
  nombres.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(li);
  });
}

// Función para sortear un amigo
sortearBtn.addEventListener("click", () => {
  if (nombres.length === 0) {
    alert("La lista está vacía. Por favor, agrega nombres antes de realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indiceAleatorio];
  resultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
});