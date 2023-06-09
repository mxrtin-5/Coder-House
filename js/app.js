// barra de navegacion al scrollear
const headerOnScroll = document.querySelector('header');

window.addEventListener('scroll', function(){
    headerOnScroll.classList.toggle('sticky', this.window.scrollY > 0);
})

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


//Productos//

let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // se inicia el array carrito en vacio


const shopContent = document.getElementById('shopContent');
const verCarrito = document.getElementById('verCarrito');
const modalContainer = document.getElementById('modal-container');

const productosJson = './productos.json'
fetch (productosJson)
    .then(response => response.json())
    .then(data => cargarProductos(data))

const renderizarCarrito = () => {

    modalContainer.innerHTML = ""
    modalContainer.style.display = 'flex'// se le da un display flex
    const headerModal = document.createElement('div');// se crea un div
    headerModal.className = 'carrito';//de clase carrito, con el siguiente contenido
    headerModal.innerHTML = `
    <div class="header-carrito">
    <h2 class='titulo-modal'> Your cart </h2> 
    </div>
    `;


    modalContainer.append(headerModal);// se le conecta estecontenido al header del modal

    const botonModal = document.createElement('i');// se crea un elemento que sera el botono para cerrar el carrito
    botonModal.innerHTML = '<i id="cancelar" class="fa-solid fa-x"></i>';
    botonModal.className = 'modal-header-button';

    botonModal.addEventListener("click", () => {// se le agrega el evento para poder efectivamente cerrar 
        modalContainer.style.display = 'none'
        modalContainer.innerHTML = ''
    });

    headerModal.append(botonModal);// se lo inserta al header del modal

    carrito.forEach((product) => {// por cada elemento del carrito se ejecuta lo siguiente
        let contenidoCarrito = document.createElement('div');/// se crea una variable que sera igual a un div creado dinamicamente
        contenidoCarrito.className = "carrito-item";// con esta clase y el siguiente contenido
        contenidoCarrito.innerHTML = `
    <div class="carrito-item-detalles">
    <span class="carrito-item-titulo">${product.nombre}</span>
    <span class="carrito-item-precio">$${product.precio}</span>
    <p> Cantidad: ${product.cantidad} </p>
</div>
<span class="btn-eliminar"> <i id='eliminar-${product.id}' class="fa-solid fa-trash"></i></span>
</div>
    `// se genera un id dinamicamente por cada elemento agregado al carrito

        headerModal.append(contenidoCarrito);// se lo agrega al headermodal

        localStorage.setItem('carrito', JSON.stringify(carrito));
    });



    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0); // acc es el acumulador, y el (elemento), siendo el cada elemento de los productos creados

    const totalCompra = document.createElement('div');
    totalCompra.className = 'total-compra';
    totalCompra.innerHTML = `
Total compra: $${total}
`;

    headerModal.append(totalCompra);

    const pagarBtn = document.createElement('button');
    pagarBtn.className = 'btn-pagar';
    pagarBtn.innerHTML = '<i class="fa-solid fa-bag-shopping">Pagar</i>'

    headerModal.append(pagarBtn);

    pagarBtn.onclick = () => {
        carrito = []
        swalPagar()
        renderizarCarrito();
    }

    carrito.forEach(producto => { // por cada elemento del carrito se ejecuta lo siguiente
        const btnEliminar = document.getElementById(`eliminar-${producto.id}`);// se crea la variable btnEliminar que se iguala al id creado dinamicamente anteriormente
        btnEliminar.addEventListener('click', () => eliminarProducto(producto));// a esa variable se le asigna el evento click que ejecuta la siguiente funcion
    });

};

function swalPagar() {
    window.location.href='./sesion.html'
}



const eliminarProducto = (product) => {
    const indice = carrito.findIndex(producto => producto.id === product.id);
    carrito.splice(indice, 1)
    renderizarCarrito();
}

function cargarProductos(array){
    array.forEach((producto) => { // misProductos es el array de productos, por cada "producto" del mismo ejecuta la siguiente funcion
        const divProducto = document.createElement('div');// crea un div
        divProducto.className = 'products';//de clase productos, con el siguiente codigo html
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
    
        shopContent.append(divProducto)// a shop content se le pega divproducto
    
        let comprar = document.createElement('a'); // se crea un a de manera dinamica
        comprar.classList.add('add');// de classe 'add'
        comprar.innerHTML = `
        <i class="fa-solid fa-cart-plus"></i>
        `
    
        divProducto.append(comprar);// se lo pega al divproducto    
    
        comprar.addEventListener('click', () => {
    
            // a comprar se le pasa un escuchador de eventos, el vento es el click
            Swal.fire({
                icon: 'success',
                class: 'succes',
                title: 'Added to the cart',
                timer: 1500
            })
    
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id)
    
            if (repeat === true) {
                carrito.map((prod) => {
                    if (prod.id === producto.id) {
                        prod.cantidad++
                    }
                });
            } else {
                carrito.push({//mediante el metodo push se le agrega lo siguiente al carrito
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,//todo esto
                    cantidad: producto.cantidad
    
                });
            }
            console.log(carrito);
            renderizarCarrito()
        });
    
    });
}




verCarrito.addEventListener('click', () => { //a verCarrito se le pasa el avento click que ejecuta lo siguiente



    renderizarCarrito();



});
