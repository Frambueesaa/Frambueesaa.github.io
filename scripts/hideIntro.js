document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const contents = document.querySelectorAll('.content'); // Selecciona todos los elementos con la clase 'content'

    // Función para ocultar la intro
    function hideIntro() {
        intro.style.opacity = '0'; // Inicia la animación de opacidad de la intro

        // Espera 2 segundos para ocultar el intro y cambiar de página
        setTimeout(() => {
            intro.style.display = 'none'; // Desaparece la intro
            changePage(); // Cambia a la nueva página
        }, 2000); // 2 segundos para que coincida con la duración de la animación
    }

    // Función para cambiar de página
    function changePage() {
        window.location.href = 'home.html'; // Cambia a la nueva página
    }

    // Función para mostrar el contenido
    function showContent() {
        // Cambia la opacidad de todos los elementos de contenido
        contents.forEach(content => {
            content.style.opacity = '1'; // Muestra el contenido al mismo tiempo
        });
    }

    // Inicia el proceso
    setTimeout(hideIntro, 2000); // Espera 2 segundos antes de ocultar la intro
    showContent();
});
