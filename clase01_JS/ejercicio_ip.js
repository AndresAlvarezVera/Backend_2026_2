function ipBinariaADecimal(ip) {
    const partes = ip.split('.');

    const octetosDecimales = partes.map(octeto => { 
        if (!/^[01]{8}$/.test(octeto)) {
            return "Error";
        }
        return parseInt(octeto, 2);
    });
    
    if (octetosDecimales.includes("Error")) {
        return "Error: Formato binario invalido";
    }
    return octetosDecimales.join('.');
}

console.log(ipBinariaADecimal("11000000.10101000.00000001.00000001")); 