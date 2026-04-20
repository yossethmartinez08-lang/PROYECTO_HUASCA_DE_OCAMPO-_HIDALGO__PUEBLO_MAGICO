// --- ARCHIVO app.js ---

document.addEventListener('DOMContentLoaded', function() {

    console.log("Sitio web de Huasca de Ocampo - Cargado correctamente");

    // 1. Scroll suave para el menú
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(this.getAttribute('href'));
            if(seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Efecto de aparecer al hacer scroll
    const elementos = document.querySelectorAll('.tarjeta, .imagenes img, article');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if(entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease';
        observador.observe(el);
    });

});
