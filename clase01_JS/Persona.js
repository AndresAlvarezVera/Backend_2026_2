class Persona {
    constructor() {
        const nombresH = {Andres: "Andres", Juan: "Juan", Maria: "Maria", Ana: "Ana", Pedro: "Pedro"};
        const nombresM = {Luisa: "Luisa", Carla: "Carla", Sofia: "Sofia", Valentina: "Valentina", Diana: "Diana"};
        this.nombre = randomName(this.sexo ? Math.random()* nombresH.lenght : nombresM.lenght);
        this.edad = randomAge(Math.floor(Math.random() * 21) + 10);
        this.sexo = Math.random() < 0.5 ? true : false;
        this.estatura = Math.random() + 1; //Entre 1.0 a 2.0
    }
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años, soy " + (this.sexo ? "hombre" : "mujer") + " y mido " + this.estatura + " metros.");
    }
    saludar2() {
        console.log("Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años, soy " + (this.sexo ? "hombre" : "mujer") + " y mido " + this.estatura + " metros.");
    }
}
const persona1 = new Persona();
const persona2 = new Persona();
console.log(persona1.saludar());
console.log(persona1.saludar());