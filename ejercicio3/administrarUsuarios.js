import fs from "fs";
class administrarUsuarios {

    static autoID = 1;

    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo;
        if (!fs.existsSync(this.rutaArchivo)) { fs.writeFileSync(this.rutaArchivo, "[]"); }
    }
    leerUsuarios() {
        const datos = fs.readFileSync(this.rutaArchivo, "utf-8");
        return JSON.parse(datos);
    }
    guardarUsuarios(usuarios) {
        fs.writeFileSync(this.rutaArchivo, JSON.stringify(usuarios, null, 2));
    }
    async agregarUsuario(nombre, apellido, edad, rol) {
        const rolesValidos = ["estudiante", "profesor", "administrador"];
        if (!rolesValidos.includes(rol)) {
            throw new Error("El rol debe ser estudiante, profesor o administrador");
        }
        const usuarios = this.leerUsuarios();
        const nuevoUsuario = { id: administrarUsuarios.autoID++ ?? 0, nombre: nombre ?? "Sin nombre", apellido: apellido ?? "Sin apellido", edad: edad ?? 20, rol: rol ?? "estudiante" };
        usuarios.push(nuevoUsuario);
        this.guardarUsuarios(usuarios);
        return nuevoUsuario;
    }
    obtenerUsuarios() {
        return this.leerUsuarios();
    }
    buscarUsuario(id) {
        const usuarios = this.leerUsuarios();
        return usuarios.find(usuario => usuario.id === id);
    }
    eliminarUsuario(id) {
        const usuarios = this.leerUsuarios();
        const nuevosUsuarios = usuarios.filter(usuario => usuario.id !== id);
        if (usuarios.length === nuevosUsuarios.length) {
            return false;
        } this.guardarUsuarios(nuevosUsuarios);
        return true;
    }
}
export default administrarUsuarios;