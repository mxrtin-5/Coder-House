const headerOnScroll = document.querySelector('header');

window.addEventListener('scroll', function () {
    headerOnScroll.classList.toggle('sticky', this.window.scrollY > 0);
})


const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const dni = document.getElementById('dni')
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const calle = document.getElementById('calle');
const numeroCalle = document.getElementById('numero-calle');
const ciudad = document.getElementById('ciudad');
const codigoPostal = document.getElementById('codigo-postal');
const barrio = document.getElementById('barrio');
const departamento = document.getElementById('departamento');
const pais = document.getElementById('pais');
const datosBancarios = document.getElementById('banco');

let carrito = JSON.parse(localStorage.getItem('carrito'))
const informacion = [];

function pagoFinalizado() {
    window.location.href='./index.html'
}

function validarForm() {
    if (nombre.value !== '' || apellido.value !== '' || email.value !== '' || dni.value !== '' || telefono.value !== '' || calle.value !== '' || numeroCalle.value !== '' || ciudad.value !== '' || codigoPostal.value !== '' || datosBancarios.value !== '') {
        Swal.fire({
            icon: 'success',
            title: 'Compra recibida corectamente',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }
    let comprador = {
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        dni: dni.value,
        telefono: telefono.value,
        calle: calle.value,
        numeroCalle: numeroCalle.value,
        ciudad: ciudad.value,
        codigoPostal: codigoPostal.value,
        barrio: barrio.value,
        departamento: departamento.value,
        pais: pais.value
    }
    console.log(comprador)
    informacion.push(comprador);

    localStorage.setItem('Compradores', JSON.stringify(informacion))
    formulario.reset();
}


formulario.addEventListener('submit', (item) => {
    item.preventDefault();
    validarForm()
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    pagoFinalizado()
    
    
});

const entrega = document.getElementById('retiro')


const { DateTime } = require('luxon');

// Obtener la fecha actual
const hoy = DateTime.now();

// Obtener la fecha de una semana a partir de hoy
const unaSemanaDespues = hoy.plus({ weeks: 1 });

// Obtener la fecha de dos semanas a partir de hoy
const dosSemanasDespues = hoy.plus({ weeks: 2 });

// Formatear las fechas en el formato deseado
const formato = "dd/MM/yyyy";

const fechaUnaSemana = unaSemanaDespues.toFormat(formato);
const fechaDosSemanas = dosSemanasDespues.toFormat(formato);

// Mostrar las fechas
entrega.innerText(`El envio llegara entre el ${fechaUnaSemana} y ${fechaDosSemanas}`)







