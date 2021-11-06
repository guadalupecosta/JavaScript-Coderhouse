let nombre = prompt("Ingresá tu nombre")
let edad = parseInt(prompt("Ingresá tu edad"))

if (edad >= 18) {
    console.log("Hola " + nombre + ", sos mayor de edad!")
} else {
    console.log("Hola " + nombre + ", sos menor de edad.")
}