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

let mode = "light"

function lightMode(){
    boton.className = 'switch';
    circulo.className = 'circulo'
    header.className = 'header';
    productos.className = 'trending-product';
    h2.className = 'center-text h2';
    container.className = 'body'
}

function darkMode(){
    boton.className = 'dark-switch';
    circulo.className = 'dark-circulo';
    header.className = 'dark-header';
    productos.className = 'dark-trending-product';
    h2.className = 'dark-center-text h2';
    container.className = 'dark-body';

}

circulo.addEventListener('click', () =>{
    if(mode === 'light'){
        darkMode()
        mode = 'dark'
    }else{
        lightMode()
        mode = 'light'
    }
})


/*
const productos = [
    {
        id: 'Vestido-01',
        nombre: 'Living Dolls Dress',
        precio: 50000
    },
    {
        id: "Vestido-02",
        nombre: 'Prudence Dress',
        precio: 90000
    },
    {
        id: 'Vestido-03',
        nombre: 'Moon Dress',
        precio: 40000
    },
    {
        id: 'Vestido-04',
        nombre: 'Black Magic Dress',
        precio: 50000
    },
    {
        id: 'Vestido-05',
        nombre: 'Arcana Dress',
        precio: 50000
    },
    {
        id: 'Vestido-06',
        nombre: 'Shadow Forest Dress',
        precio: 80000
    },
    {
        id: 'Vestido-07',
        nombre: 'Monroe Dress',
        precio: 60000
    },
    {
        id: 'Vestido-08',
        nombre: 'Minerva Dress',
        precio: 35000
    }
    
    
];



// Función para solicitar al usuario un producto por su ID
let carrito = [];

function solicitarProducto() {

    let productoSeleccionado = prompt('Ingrese el ID del producto que desea')
    productoSeleccionado = productos.find((producto) => producto.id === productoSeleccionado);

    if(!productoSeleccionado){ // comprueba si el valor es falsy, es decir, si es null, undefined, 0, '', false, o NaN. Si productoSeleccionado es falsy, significa que el ID de producto ingresado no es válido, por lo que se muestra una alerta al usuario indicando que el ID es inválido y la función retorna null. 
        productoseleccionado = prompt('El ID ingresado es invalido, por favor vuelva a ingresar un ID valido');
    }

    carrito.push(productoSeleccionado);
    return productoSeleccionado;
}

const cargarProductos = () =>{
    let seguir;
    let total = 0;
    do{
        const producto = solicitarProducto(); // para poder obtener el objeto producto que se seleccionó y luego poder agregarlo al carrito de compras
        seguir = prompt('Desea ingresar otro producto si/no');

        if(seguir !== 'si' && seguir !== 'no'){
        seguir = prompt('Error, debe ingresar si o no');
        }

        if (producto && seguir === 'no'){ //El parámetro producto se refiere al resultado devuelto por la función solicitarProducto(), verifica si el usuario ha ingresado productos antes de decidir no ingresar mas
            total = sumarProductos(carrito)
            alert(`El total de los productos seleccionados es: $${total}`);
        }

    }while(seguir == 'si')
}



// Función para sumar el precio total de los productos ingresados
function sumarProductos(productos) {
    let total = 0;

    for (const producto of productos) {
        total += producto.precio;
    }

    return total;
}


// Ejecutar el programa
cargarProductos()
*/
