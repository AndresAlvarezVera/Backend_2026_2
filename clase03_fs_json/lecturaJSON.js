import fs from 'fs'
const lecturaJSON = async () => {
    const filePath = './Backend/clase03_fs_json/data.json';

    try {
        const contenido = await fs.promises.readFile(filePath, 'utf-8');
        console.log(contenido);
        const users = JSON.parse(contenido);
        users.push({ nombre: 'Juan', apellidos: 'Perez', edad: 30, sexo: true, estatura: 1.92 });
        console.log(users);
        if (users.some(u => u.nombre === 'Juan')) {
            console.log('El usuario Juan ya existe');
        } else {
            console.log('El usuario NO existe');
        }
    } catch (err) {
        console.log("Error al leer el archivo:", err);
    }
}
lecturaJSON();
