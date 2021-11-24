/* localStorage.setItem('valores', ["Hola Coders!", {nombre: "Guada", apellido: "Costa"}, 4])
localStorage.setItem('valores2', "Holaaa")
localStorage.setItem('valores3', true)

let items = localStorage.getItem('valores')
console.log(items)
console.log(localStorage.length)

localStorage.removeItem('asd')
localStorage.clear()

for(let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i))
    let clave = localStorage.key(i)
    console.log(localStorage.getItem(clave))
}

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    devolverDatos() {
        return `${this.nombre} - ${this.precio} - ${this.stock}`
    }
}

const producto1 = new Producto('Celular', 20000, 5)
const producto2 = new Producto('Heladera', 50000, 7)
const producto3 = new Producto('Parlante', 25000, 3)

let productos = [producto1, producto2, producto3]

console.log(productos[0].devolverDatos())
localStorage.setItem('productos', JSON.stringify(productos))

let productosLiterales = JSON.parse(localStorage.getItem('productos'))
console.log(productosLiterales)

// Error no existe el metodo
//console.log(productosLiterales[0].devolverDatos())

// EJERCICIO en clase
// Realiza un algoritmo que almacene información en storage y guarde un array de objetos en formato JSON.
