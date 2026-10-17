const arreglo = [1, 2, 3, 4, 5];

arreglo.map(element => console.log(element * 2));

const paridad = (element) => {
    if (element % 2 === 0) {
        return `el número ${element} es par`;
    } else{
        return `el número ${element} es impar`;
    }
};

arreglo.map(element => console.log(paridad(element)));

arreglo.map(element => console.log(Math.pow(element, 2)));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const calculadora = (a, b, operacion) => {
    return operacion(a,b);
}

console.log(calculadora(10, 5, suma));
console.log(calculadora(10, 5, resta));
console.log(calculadora(10, 5, multiplicacion));
console.log(calculadora(10, 5, division));