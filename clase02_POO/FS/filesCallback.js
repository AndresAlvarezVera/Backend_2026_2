import fs from 'fs';
const filePath= './fileSystem/ejemplo.txt';

fs.writeFile(filePath,"Hi students, This is my first archive", (err)=>{
    if(err){
        console.log("Error al escribir el archivo");
    }else{
        console.log("Archivo escrito correctamente");
        fs.readFile(filePath,'utf8',(err,contenido)=>{
            if(err){
                console.log("Error al leer el archivo");
            }else{
                console.log(contenido);
                fs.appendFile(filePath,"\nadd content",(err)=>{
                    if(err){
                        console.log("Error al agregar contenido");
                    }else{
                        fs.readFile(filePath,'utf8',(err,contenido)=>{
                            if(err){
                                console.log("Error al leer el archivo");
                            }else{
                                console.log(contenido);
                                // fs.unlink(filePath,(err)=>{
                                //     if(err){
                                //         console.log("Error al eliminar el archivo");
                                //     }else{
                                //         console.log("Archivo eliminado correctamente");
                                //     }
                                // });
                            }
                        });
                    }
                });
            }
        });
    }
});