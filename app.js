// se precisa que el usuario ingrese el precio de la cantidad de productos que quiera y el programa al final realice una sumatoria de todos los productos
/*
let total = 0;
let continuar = true;

while (continuar) {
    let precio = parseFloat(prompt('Ingrese el precio del producto'));

    // Validación del precio
    while (isNaN(precio) || precio < 0) {
        precio = parseFloat(prompt('Precio inválido. Ingrese el precio del producto'));
    }

    total += precio;
    
    let respuesta = prompt('¿Desea continuar ingresando productos? (S/N)');

    while (respuesta.toUpperCase() !== 'S' && respuesta.toUpperCase() !== 'N') {
        respuesta = prompt('Respuesta inválida. ¿Desea continuar ingresando productos? (S/N)');
    }

    if (respuesta.toUpperCase() === 'N') {
        continuar = false;
    }
}

alert(`El total de la compra es: ${total}`);
*/


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
        nombre: 'Minerve Dress',
        precio: 35000
    }
];

// Función para solicitar al usuario un producto por su ID
function solicitarProducto() {
    let productoEncontrado = null;
    let id;
    let continuar = true;

    do {
        id = prompt("Ingrese el ID del producto que desea agregar:");

        console.log('pineapple')
        // Buscar el producto en el arreglo de productos
        productoEncontrado = productos.find((producto) => producto.id === id);

        if (!productoEncontrado) {
            alert("");
        } else {
            let respuesta = prompt("¿Desea agregar otro producto? (si/no)");
            debugger
            console.log('hola')
            while (respuesta !== "si" && respuesta !== "no") {
                respuesta = prompt(
                    'La respuesta ingresada no es válida. Por favor ingrese "si" o "no".'
                );
            }

            if (respuesta === "no") {
                continuar = false;
            }
        }
    } while (continuar);

    return productoEncontrado;
}

// Función para sumar el precio total de los productos ingresados
function sumarProductos(productos) {
    let total = 0;

    for (const producto of productos) {
        total += producto.precio;
    }

    return total;
}

// Función principal del programa
function main() {
    const productosSeleccionados = [];

    // Solicitar al usuario productos hasta que decida terminar
    while (true) {
        const producto = solicitarProducto();

        if (!producto) {
            break;
        }

        productosSeleccionados.push(producto);
    }

    // Calcular el precio total de los productos seleccionados
    const total = sumarProductos(productosSeleccionados);

    // Mostrar el resultado al usuario
    alert(`El total de los productos seleccionados es: $${total}`);
}

// Ejecutar el programa
main();
