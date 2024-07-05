const btnMenu = document.querySelector('.btn__menu');
const btnSalir = document.querySelector('.btn__salir');
const verNav = document.querySelector('.ver__nav');

btnMenu.addEventListener('click', () => {
    verNav.classList.toggle('visible__menu');
    btnSalir.style.display = 'flex';
});

btnSalir.addEventListener('click', () =>{
    verNav.classList.remove('visible__menu');
    btnSalir.style.display = 'none';
});


