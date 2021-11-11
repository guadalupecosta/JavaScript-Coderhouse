/* 
Cuotas con interés?
    Sí -> Porcentaje -> Pedir monto -> Aplicarlo -> Devolver cuotas.
    No -> Pedir monto -> Devolver cuotas.
    Cancelar.
*/
function pedirRespuesta(mensaje) {
    return prompt(mensaje).toLowerCase()
}

function pedirNumero(mensaje) {
    return parseFloat(prompt(mensaje));
}

function esNumeroValido(numero) {
    return !isNaN(numero) && numero != null && numero != '' && numero >= 0
}

let respuesta = pedirRespuesta("Desea calcular cuotas con interés? SI / NO / CANCELAR")

while (respuesta != "si" && respuesta != "no" && respuesta != "cancelar") {
    respuesta = pedirRespuesta("No ingresó una respuesta.\nDesea calcular cuotas con interés? SI / NO")
}

if (respuesta == "cancelar") {
    alert("Gracias por usar la calculadora, puede volver cuando quiera.")
    document.write("Gracias por usar la calculadora, puede volver cuando quiera.")
} else {
    let interes = 0
    
    if (respuesta === "si") {
        interes = pedirNumero("Ingrese el interés en porcentaje que desea aplicar a sus cuotas.")
    
        while (!esNumeroValido(interes)) {
            interes = pedirNumero("No ingresó un número válido. Por favor, ingrese el interes que quiere aplicar a sus cuotas.");
        }
    }
    
    let monto = pedirNumero("Ingrese el monto que quiere calcular en cuotas.")
    
    while (!esNumeroValido(monto)) {
        monto = pedirNumero("No ingresó un número válido. Por favor, ingrese el monto que quiere calcular en cuotas.");
    }
    
    let montoTotal = monto + (monto * (interes / 100))
    
    let tabla = ''
    
    for (numeroCuota = 1; numeroCuota <= 12; numeroCuota++) {
        let montoCuota = montoTotal / numeroCuota
        
        if (numeroCuota == 1 || numeroCuota == 3 || numeroCuota == 6 || numeroCuota == 9 || numeroCuota == 12) {
            // Podes pagar (el monto ingresado) en (número de cuota)
            // (si el número de cuota es 1, mostrá "cuota",
            // si el número es mayor, mostrá "cuotaS") de (monto de la cuota).
            tabla = tabla + `Podés pagar ${montoTotal} en ${numeroCuota} ${numeroCuota == 1 ? 'cuota' : 'cuotas'} de ${montoCuota} <br>`
        }
    }
    
    document.write(tabla);
}