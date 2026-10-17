import { Persona } from "./Persona.js";
const persona1 = new Persona(1006538783, "Andres", 23, true, 1.80);
console.log(persona1);
persona1.envejecer();
console.log(persona1);
/*const persona = {
    nombre: juan,
    edad: 30,
    saludar: function () {
        console.log(`hola, me llamo ${this.nombre}`);
    }
}*/