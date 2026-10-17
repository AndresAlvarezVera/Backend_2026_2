export class Persona {
    constructor(id, nombre, edad, sexo, estatura) {
        this.id = id ?? 0;
        this.nombre = nombre ?? "Sin nombre";
        this.edad = edad ?? 0;
        this.sexo = sexo ?? true;
        this.estatura = estatura ?? 1.60;
    }

    /*    constructor(obj) {
            this.id = obj.id ?? 0;
            this.nombre = obj.nombre ?? "Sin nombre";
            this.edad = obj.edad ?? 0;
            this.sexo = obj.sexo ?? true;
            this.estatura = obj.estatura ?? 1.60;
        }
    */
    envejecer() {
        this.edad++;
    }

}

/*const persona1 = new Persona(1006538783, "Andres", 23, true, 1.80);
persona1.envejecer();
console.log(persona1);*/
