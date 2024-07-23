// Colores predefinidos
const color1 = '#000000';
const color2 = '#8921ff';

// Variables de control de la animación
let position = 0;
let direction = 1; // 1 para adelante, -1 para atrás
const speed = 0.005; // Velocidad de la animación

// Función para animar el fondo degradado
function animateBackground() {
    position += speed * direction; // Incrementa o decrementa la posición según la dirección

    // Invertir dirección si se alcanzan los límites
    if (position >= 1 || position <= 0) direction *= -1;

    // Aplica el degradado con la posición animada
    document.body.style.background = `linear-gradient(180deg, ${color1} ${position}%, ${color2} ${(position + 0.5) * 100}%)`;
    document.body.style.backgroundSize = "200% 200%";

    // Solicita la siguiente animación de cuadro
    requestAnimationFrame(animateBackground);
}

// Inicia la animación cuando la página se carga
window.onload = animateBackground;