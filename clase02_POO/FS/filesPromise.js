import fs from 'fs';

const funcionesAsincronas = async () => {
    const filePath= './fileSystem/ejemplo.txt';
    try {
        await fs.promises.writeFile(filePath,"Hi students, This is my first archive");
        console.log("Archivo escrito correctamente");
        const contenido = await fs.promises.readFile(filePath,'utf8');
        console.log(contenido);
        await fs.promises.appendFile(filePath,"\nadd content");
        const contenidoActualizado = await fs.promises.readFile(filePath,'utf8');
        console.log(contenidoActualizado);
        // await fs.promises.unlink(filePath);
        // console.log("Archivo eliminado correctamente");
    } catch (err) {
        console.log("Error: ", err);
    }
};

funcionesAsincronas();