document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const contents = document.querySelectorAll('.content'); // Selecciona todos los elementos con la clase 'content'

    // Funci�n para ocultar la intro
    function hideIntro() {
        intro.style.opacity = '0'; // Inicia la animaci�n de opacidad de la intro

        // Espera 2 segundos para ocultar el intro y cambiar de p�gina
        setTimeout(() => {
            intro.style.display = 'none'; // Desaparece la intro
            changePage(); // Cambia a la nueva p�gina
        }, 2000); // 2 segundos para que coincida con la duraci�n de la animaci�n
    }

    // Funci�n para cambiar de p�gina
    function changePage() {
        window.location.href = 'home.html'; // Cambia a la nueva p�gina
    }

    // Funci�n para mostrar el contenido
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
