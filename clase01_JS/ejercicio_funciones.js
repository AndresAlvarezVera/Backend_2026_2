//Funcion declarada
function saludar (nombre) {
    console.log("Hola " + nombre);
}
//Funcion expresada
const saludar2 = function(nombre) {
    console.log("Hola " + nombre);
}
const funcion = saludar;

console.log(funcion("Ana"));

//Funciones flecha
const saludarFlecha = (nombre) => { return "Hola, " + nombre;}
const saludarFlecha2 = () => { return "Hola, " + "Ana";}
const saludarFlecha3 = () => { "Hola, " + "Ana";}
const saludarFlecha4 = (nombre, apellido) => { "Hola, " + nombre + " " + apellido;}
const saludarFlecha5 = nombre => {return "Hola, " + nombre;}
const saludarFlecha6 = nombre => { "Hola, " + nombre;}

console.log(saludarFlecha("Ana"));
console.log(saludarFlecha2());
console.log(saludarFlecha3());
console.log(saludarFlecha4("Ana", "García"));
console.log(saludarFlecha5("Ana"));
console.log(saludarFlecha6("Ana"));

//Funciones anónimas
const saludarAnonima = function(nombre) {
    return "Hola, " + nombre;
}

console.log(saludarAnonima("Ana"));