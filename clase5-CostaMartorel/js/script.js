/* Inicializo la variable Total */
let articulo = 0;
let precio = 0;
let cantidad = 0;
let metodoDePago = 0;
let subTotal = 0;
let confirmacion;

/* Armo el constructor */
class Venta {
  constructor(articulo, precio, cantidad, metodoDePago) {
    this.articulo = articulo;
    this.precio = precio;
    this.cantidad = cantidad;
    this.metodoDePago = metodoDePago;
    this.subTotal = subTotal;
    this.envio = 0;
    this.total = 0;
  }

  /* La tuve que sumar dentro de la función sumarAlCarrito, porque no sabía cómo hacer que se vaya acumulando */
  sumarSubTotal() {
    this.subTotal = subTotal;
  }

  /* Creo una función para sumarle el iva al subTotal */
  sumarIVA() {
    return this.subTotal * 0.21;
  }

  /* Función para hacer un descuento en efectivo */
  sumarDescuento() {
    if ((this.metodoDePago == 1)) {
      return this.subTotal * 0.15;
    } else {
      return 0;
    }
  }

  /* Función para calcular el envío */
  sumarEnvio() {
    if (confirmacion && this.subTotal < 12000 && this.subTotal != 0) {
      this.envio = 750;
    } else if (!confirmacion || this.subTotal >= 12000) {
      this.envio = 0;
    }
  }

  /* Suma el total */
  sumarTotal() {
    this.total = this.subTotal + this.sumarIVA() - this.sumarDescuento() + this.envio;
  }
}

/* Pido el nombre al usuario */
let nombre = prompt("Hola! Bienvenidos a Olivia. Cuál es tu nombre?", "Pj.: Guadalupe");

/* Creo una función con un do while para que el comprador elija los productos para sumar al carrito */
function sumarAlCarrito() {
  do {
    articulo = parseInt(prompt("Qué árticulo querés comprar " + nombre + "?\n 1. Remeras ($1000)\n 2. Jeans ($6900)\n 3. Joggers ($5900)", 0));
    cantidad = parseInt(prompt("Cuántas unidades?", 0));

    switch (articulo) {
      case 1:
        articulo = "Remeras";
        precio = 1000;
        break;
      case 2:
        articulo = "Relojes";
        precio = 6900;
        break;
      case 3:
        articulo = "Joggers";
        precio = 5900;
        break;
      default:
        alert("Datos incorrectos");
        cantidad = 0;
    }

    subTotal = subTotal + precio*cantidad;
    otroProducto = confirm("Querés seguir comprando " + nombre + "??");
  } while (otroProducto);

  do {
    metodoDePago = parseInt(prompt("Cómo vas a abonar? \n  1. Efectivo\n  2. Transferencia o Débito", 0));
  }
    while (metodoDePago != 1 && metodoDePago != 2);

    confirmacion = confirm(nombre + " querés envío a domicilio? (si elige cancelar, tiene que retirar el producto por nuestro local)");

    return new Venta (articulo, precio, cantidad, metodoDePago);
}

const venta = sumarAlCarrito();

venta.sumarSubTotal();
venta.sumarIVA();
venta.sumarDescuento();
venta.sumarEnvio();
venta.sumarTotal();

alert("Gracias por comprar, " + nombre + "\n-Su subtotal es: " + venta.subTotal + "\n-El IVA es: " + venta.sumarIVA() + "\n-Descuento de: " + venta.sumarDescuento() + "\n-Costo de envío: " + venta.envio + "\n---El TOTAL final es de: " + venta.total);