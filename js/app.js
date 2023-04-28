// ---------------- counter seguidores ----------

const counters = document.querySelectorAll(".counter");

counters.forEach(item => {
    item.innerText = "0"
    const target = + item.getAttribute("data-target");
    const interval = target / 100
    const updateCounter = () => {
        const value = +item.innerText;
        if (value < target) {
            item.innerText = Math.ceil(value + interval);
            setTimeout(() => {
                updateCounter()
            }, 20);
        }
    }
    updateCounter();
});


// ------------------- modo oscuro -------------

let boton = document.querySelector('.switch');
let circulo = document.querySelector('.circulo');
let header = document.querySelector('header');
let productos = document.querySelector('.trending-product');
let h2 = document.querySelector('.center-text');
let container = document.querySelector('body');
let clientes = document.querySelector('.client-reviews');
let contacto = document.querySelector('.contact');
let footer = document.querySelector('.end-text');

let mode = "light"

function lightMode() {
    boton.className = 'switch';
    circulo.className = 'circulo'
    header.className = 'header';
    productos.className = 'trending-product';
    h2.className = 'center-text h2';
    container.className = 'body';
    clientes.className = 'client-reviews';
    contacto.className = 'contact';
    footer.className = 'end-text';
}

function darkMode() {
    boton.className = 'dark-switch';
    circulo.className = 'dark-circulo';
    header.className = 'dark-header';
    productos.className = 'dark-trending-product';
    h2.className = 'dark-center-text h2';
    container.className = 'dark-body';
    clientes.className = 'dark-client-reviews';
    contacto.className = 'dark-contact';
    footer.className - 'dark-end-text';

}

circulo.addEventListener('click', () => {
    if (mode === 'light') {
        darkMode()
        mode = 'dark'
    } else {
        lightMode()
        mode = 'light'
    }
})


//Productos//

const carrito = [];


const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modal-container')

misProductos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.className = 'products';
    divProducto.innerHTML = `
    <div class="row">
    <img src="img/${producto.id}.jpg" alt="">
    <div class="heart-icon">
        <i class='bx bx-heart'></i>
    </div>
    <div class="ratting">
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bx-star'></i>
        <i class='bx bxs-star-half'></i>
    </div>

    <div class="price">
        <h4>${producto.nombre} <br> ID: ${producto.id}</h4>
        <p>$${producto.precio}</p>
    </div>
    </div>
    

`

    shopContent.append(divProducto)

    let comprar = document.createElement('a');
    comprar.className = "add";
    comprar.innerHTML = `
<i class="fa-solid fa-cart-plus"></i>
`

    divProducto.append(comprar);

    comprar.addEventListener('click', () => {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        });
        console.log(carrito)
    });
});

verCarrito.addEventListener('click', () => {
    const headerModal = document.createElement('div');
    headerModal.className = 'header-modal';
    headerModal.innerHTML = `
    <h2 class='titulo-modal'> Your cart </h2> 
    `;

    modalContainer.append(headerModal);

    const botonModal = document.createElement('h4');
    botonModal.innerText = 'X';
    botonModal.className = 'modal-header-button';

    headerModal.append(botonModal);

    carrito.forEach((product)=>{
        let contenidoCarrito = document.createElement('div');
        contenidoCarrito.className = "modal-content";
        contenidoCarrito.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</P>
        <p>${product.cantidad}</p>
        `

        modalContainer.append(contenidoCarrito);
    });

    const total = carrito.reduce((acc,el)=> acc + el.precio, 0); // acc es el acumulador, y el (elemento), siendo el cada elemento de los productos creados

    const totalCompra = document.createElement('div');
    totalCompra.className = 'total-compra';
    totalCompra.innerHTML = `
    Total compra: $${total}
    `;

    modalContainer.append(totalCompra);
});

