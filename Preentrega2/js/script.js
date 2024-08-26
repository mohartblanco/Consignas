
///////////////// Preentrega 2 - Mohart Blanco Torres /////////////////

let listaDeCompras = [];

function cargarLista() {
  let lista = localStorage.getItem("listaDeCompras");
  if (lista) {
    listaDeCompras = JSON.parse(lista);
    mostrarLista();
  }
}

function guardarLista() {
  localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
  mostrarLista();
}

function agregarElemento() {
  let elemento = document.getElementById("elemento").value;
  if (!isNaN(elemento)) {
    alert("No se permiten solamente números, puedes agregar un numero y el nombre de tu elemento.");
    return;
  }
  listaDeCompras.push(elemento);
  guardarLista();
  document.getElementById("elemento").value = "";
}

function eliminarElemento() {
  let elemento = document.getElementById("elemento").value;
  let indice = listaDeCompras.indexOf(elemento);
  if (indice === -1) {
    alert("Elemento no encontrado en la lista, escribelo igual que en la lista para poder eliminarlo.");
    return;
  }
  listaDeCompras.splice(indice, 1);
  guardarLista();
}

function mostrarLista() {
  let listaHTML = "";
  listaDeCompras.forEach(function(elemento) {
    listaHTML += "<li>" + elemento + "</li>";
  });
  document.getElementById("lista").innerHTML = listaHTML;
}

function limpiarLista() {
  if (confirm("¿Estás seguro de limpiar la lista?")) {
    listaDeCompras = [];
    guardarLista();
  }
}

document.getElementById("agregar").addEventListener("click", agregarElemento);
document.getElementById("eliminar").addEventListener("click", eliminarElemento);
document.getElementById("limpiar").addEventListener("click", limpiarLista);

cargarLista();