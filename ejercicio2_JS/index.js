import { administrarUsuarios } from "./ManagerUser.js";
import { administrarUsuarios } from "./ejercicio2_JS/AdministrarUsuarios.js";
const datos = new administrarUsuarios('./2026-2/Ejercicio_AdministrarUsuarios/usuarios.json');
// const info=await datos.getUsers();
datos.createUser({ nombre: "algo", apellido: "algoapellido" });
// console.log(info);