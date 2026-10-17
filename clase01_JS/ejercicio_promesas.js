const division = (divisor, dividendo) => {
    return new Promise((resolve, reject) => {
        if (dividendo === 0) {
            reject("Error: No se puede dividir por cero");
        } else {
            resolve(divisor / dividendo);
        }
    })
}

const resultado = division(10, 2).then(resultado => console.log(`El resultado es: ${resultado}`)).catch(error => console.log(error));