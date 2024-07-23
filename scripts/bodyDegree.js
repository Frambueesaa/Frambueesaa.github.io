// Colores predefinidos
const color1 = '#000000';
const color2 = '#8921ff';

// Variables de control de la animaci�n
let position = 0;
let direction = 1; // 1 para adelante, -1 para atr�s
const speed = 0.005; // Velocidad de la animaci�n

// Funci�n para animar el fondo degradado
function animateBackground() {
    position += speed * direction; // Incrementa o decrementa la posici�n seg�n la direcci�n

    // Invertir direcci�n si se alcanzan los l�mites
    if (position >= 1 || position <= 0) direction *= -1;

    // Aplica el degradado con la posici�n animada
    document.body.style.background = `linear-gradient(180deg, ${color1} ${position}%, ${color2} ${(position + 0.5) * 100}%)`;
    document.body.style.backgroundSize = "200% 200%";

    // Solicita la siguiente animaci�n de cuadro
    requestAnimationFrame(animateBackground);
}

// Inicia la animaci�n cuando la p�gina se carga
window.onload = animateBackground;