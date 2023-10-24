class Contador {
  static contadorGlobal = 0;

  constructor(nombre) {
    this.nombre = nombre;
    this.cuentaIndividual = 0;
    Contador.contadorGlobal++;
  }

  getResponsable() {
    return this.nombre;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.contadorGlobal++;
  }

  getCuentaIndividual() {
    return this.cuentaIndividual;
  }

  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }

  // Método para probar individualidad entre instancias
  probarIndividualidad(otroContador) {
    return this === otroContador;
  }
}

// Creación de instancias
const contador1 = new Contador("Responsable 1");
const contador2 = new Contador("Responsable 2");

// Prueba de métodos y funcionalidades
contador1.contar();
contador1.contar();
contador2.contar();

console.log(`Responsable: ${contador1.getResponsable()}`);
console.log(`Cuenta individual: ${contador1.getCuentaIndividual()}`);
console.log(`Cuenta global: ${Contador.getCuentaGlobal()}`);

console.log(`Responsable: ${contador2.getResponsable()}`);
console.log(`Cuenta individual: ${contador2.getCuentaIndividual()}`);
console.log(`Cuenta global: ${Contador.getCuentaGlobal()}`);

console.log(
  `¿Son la misma instancia? ${contador1.probarIndividualidad(contador2)}`
);
