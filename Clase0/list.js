function corroboraElemento(lista, elemento) {
  return lista.includes(elemento);
}

// Ejemplo de uso
const miLista = [1, 2, 3, 4, 5];
const elementoABuscar = 3;

if (corroboraElemento(miLista, elementoABuscar)) {
  console.log(`El elemento ${elementoABuscar} está en la lista.`);
} else {
  console.log(`El elemento ${elementoABuscar} no está en la lista.`);
}
