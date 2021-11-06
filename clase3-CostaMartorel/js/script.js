let numero = parseInt(
   prompt("Ingrese un numero para conocer su tabla de multiplicar")
 );

let tabla = ''

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    tabla = tabla + numero + "x" + i + "=" + resultado + '\n'
}

alert(tabla);