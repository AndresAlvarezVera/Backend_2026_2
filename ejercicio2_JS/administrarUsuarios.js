import fs from 'fs'

export class administrarUsuarios {
    constructor(pathFile) {
        this.pathFile = pathFile;
    }

    async createUser(newUser) {
        const user = {
            id: 0,
            nombre: newUser.nombre ?? "Sin nombre",
            apellido: newUser.apellido ?? 'sin apellido',
            edad: newUser.edad ?? 18,
            rol: newUser.rol ?? 'estudiante'
        };
        const users = await this.getUsers();
        //       console.log(users);
        const usersJson = JSON.parse(users);
        //        console.log(usersJson);
        usersJson.push(user);
        //        console.log("xxxxxxxxxx")
        //        console.log(usersJson);
        try {
            await fs.promises.writeFile(this.pathFile, JSON.stringify(usersJson, null, "\t"));
        } catch (error) {
            console.log("No fue posible crear el nuevo usuario")
        }

    }

    async getUsers() {
        try {
            const users = await fs.promises.readFile(this.pathFile, 'utf-8');
            console.log(users);
            return users;
        } catch (error) {
            console.error("No hay archivo");
            return [];
        }
    }


}