const headerOnScroll = document.querySelector('header');

window.addEventListener('scroll', function(){
    headerOnScroll.classList.toggle('sticky', this.window.scrollY > 0);
})


const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');

formulario.addEventListener('submit', (item)=>{
    item.preventDefault();
if(nombre !== '' && nombre !== 'Nombre'){
        console.log('nombre correcto')
    }else{
        console.log('nombre incorrecto')
    }
});