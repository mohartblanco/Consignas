
///////////////// Preentrega 1 - Mohart Blanco Torres /////////////////

const listaDeCompras = [];

function agregarElemento() {
  let elemento = prompt("Agregar elemento a la lista de compras:");
  listaDeCompras.push(elemento);
}

function eliminarElemento() {
  let elemento = prompt("Eliminar elemento de la lista de compras:");
  let index = listaDeCompras.indexOf(elemento);
  if (index > -1) {
    let confirmacion = confirm("¿Estás seguro de eliminar " + elemento + "?");
    if (confirmacion) {
      listaDeCompras.splice(index, 1);
    }
  } else {
    alert("Elemento no encontrado en la lista.");
  }
}

function mostrarLista() {
  let lista = listaDeCompras.join("\n");
  alert("Lista de compras:\n" + lista);
}

document.getElementById("iniciarLista").addEventListener("click", function()
{
let continuar = true;
while (continuar) {
  let opcion = prompt("Lista de compras\n1. Agregar elemento\n2. Eliminar elemento\n3. Mostrar lista\n4. Salir");
  switch (opcion) {
    case "1":
      agregarElemento();
      break;
    case "2":
      eliminarElemento();
      break;
    case "3":
      mostrarLista();
      break;
    case "4":
      alert("Estas finalizando, si creaste una Lista se mostrará en Consola");
      continuar = false;
      break;
    default:
      alert("Opción inválida.");
  }
}

console.log("lista de compras final:");
console.log(listaDeCompras.join("\n"));
});