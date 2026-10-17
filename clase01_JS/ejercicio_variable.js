//ES6 aparece let y se depreca var, se recomendaria usar let y const, ya que var tiene un alcance global y puede generar problemas en el código

let numero = 2;
let texto = "Hola, soy un texto";
let estado = true;
let numeroReal = 3.14;

console.log("El valor de la variable numero es: " + numero);
console.log("El valor de la variable texto es: " + texto);
console.log("El valor de la variable estado es: " + estado);
console.log("El valor de la variable numeroReal es: " + numeroReal);

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof estado);
console.log(typeof numeroReal);

const x = 5;
// x = 10; // Esto generará un error, ya que no se puede reasignar un valor a una constante
console.log(x);

//mutabilidad de los arreglos y objetos
const arreglo = [1, 2, 3];
arreglo.push(4);
console.log(arreglo); // Esto imprimirá [1, 2, 3, 4] ya que se puede modificar el contenido del arreglo, pero no se puede reasignar el arreglo completo