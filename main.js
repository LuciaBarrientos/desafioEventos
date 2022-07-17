// declaración de productos

/* class Producto {
    constructor (id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    }
}

const productos = [];

productos.push (new Producto (1, "remera", 1500));
productos.push (new Producto (2, "pantalon", 3000));
productos.push (new Producto (3, "buzo", 4000)); */


// btn comprar remera

let listaCarrito = document.querySelector(".listaCarrito");
let cantProducto = 0;
let saldo = 0;

let btnRemera = document.getElementById ("1");
btnRemera.addEventListener ("click", comprarRemera);

function comprarRemera () {
    let productoCarrito = document.createElement("p");
    productoCarrito.innerHTML = `<p>Remera GIVEN - $1500</p>`;
                                 
    listaCarrito.appendChild(productoCarrito);    

}


// btn comprar pantalon

let btnPantalon = document.getElementById ("2");
btnPantalon.addEventListener ("click", comprarPantalon);

function comprarPantalon () {
    let productoCarrito = document.createElement("p");
    productoCarrito.innerHTML = `<p>Pantalon Tokyo Revengers - $3000</p>`;

                                
    listaCarrito.appendChild(productoCarrito);

}


// btn comprar buzo

let btnBuzo = document.getElementById ("3");
btnBuzo.addEventListener ("click", comprarBuzo);

function comprarBuzo () {
    let productoCarrito = document.createElement("p");
    productoCarrito.innerHTML = `<p>Buzo Gojo - $4000</p>`;
                                
    listaCarrito.appendChild(productoCarrito);

}

// btn vaciar carrito

let btnVaciar = document.getElementById ("vaciarCarrito");
btnVaciar.addEventListener ("click", vaciarCarrito);

function vaciarCarrito () {
    listaCarrito.remove();
}