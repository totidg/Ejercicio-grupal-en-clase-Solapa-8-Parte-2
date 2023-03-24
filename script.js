
const CONTENEDOR = document.getElementById('conteiner');

function suma() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;
  const TOTAL = +numero1 + +numero2; // Unary plus (+)
   CONTENEDOR.innerHTML = 'La suma de los números es: ' + TOTAL;
}

function resta() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;
  const TOTAL = +numero1 - +numero2;
  CONTENEDOR.innerHTML = 'La resta de los números es: ' + TOTAL;
}

function multiplicasion() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;
  const TOTAL = +numero1 * +numero2;
  CONTENEDOR.innerHTML = 'El producto de los números es: ' + TOTAL;
}

function division() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;
  const TOTAL = +numero1 / +numero2;
  CONTENEDOR.innerHTML = 'El cociente de los números es: ' + TOTAL;
  if (numero2 == 0) {
    CONTENEDOR.innerHTML = 'No es posible dividir por 0';
  }
}
