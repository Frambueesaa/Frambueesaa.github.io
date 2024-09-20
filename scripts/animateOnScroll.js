function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Seleccionamos todos los divs que queremos animar
const animatedScrollElements = document.querySelectorAll('.animatedScroll');

// Funci�n para verificar la visibilidad de cada elemento
function checkVisibility() {
    animatedScrollElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Escucha el evento de scroll para activar la animaci�n
window.addEventListener('scroll', checkVisibility);

// Verificamos al cargar la p�gina por si alguno ya est� visible
checkVisibility();
