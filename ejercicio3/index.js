import administrarUsuarios from "./administrarUsuarios.js";

const usuarios = new administrarUsuarios("./usuarios.json");

await usuarios.agregarUsuario("Andrés", "Alvarez", 20, "estudiante");

await usuarios.agregarUsuario("Carlos", "Gómez", 35, "profesor");

await usuarios.agregarUsuario("Laura", "Pérez", 40, "administrador");

await usuarios.agregarUsuario(null, null, null, "estudiante");

console.log(usuarios.obtenerUsuarios());

//console.log(usuarios.buscarUsuario(1));

node
git
docker