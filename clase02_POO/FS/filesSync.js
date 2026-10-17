import fs from 'fs';
const filePath = "C:\\Users\\Alv3a\\OneDrive\\Documentos\\Visual Studio\\Backend\\clase02_POO\\FS\\ejemplo.txt";
writeFileSync(filePath, "contenido del archivo");
if (fs.existSync(filePath)) {
    let contenido = fs.readFileSync(filePath, "utf-8");
    fs.appendFileSync(filePath, "\nactualizacion del archivo (agregacion)");
    contenido = fs.readFileSync(filePath, "utf-8");
    //    fs.unlinkSync(filePath);//Elimina el archivo
}else{
    console.log("El archivo no existe");
}