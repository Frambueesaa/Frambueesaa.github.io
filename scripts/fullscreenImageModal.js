
/* Carga el estilo del modal en el DOM. */
function LoadModalInDom()
{
    document.getElementById("fullscreen-image").innerHTML = `
        <section>
        <p id="fullscreen-image-txt">Texto de Prueba</p>
        <img id="fullscreen-image-img" src="/images/projects/animal_strikers/banner.webp" alt="Fullscreen">
        <a id="fullscreen-image-button" class="rectangleButton" onclick="CloseFullScreen()">Back</a>
        </section>
    `;
}

/* Funcion que abre en pantalla completa mediante el modal la imagen seleccionada. */
function ViewOnFullScreen(src, text, buttonText)
{
    document.getElementById("fullscreen-image").classList.add("visible");
    document.getElementById("fullscreen-image-img").src = src;
    document.getElementById("fullscreen-image-txt").textContent = text;
    document.getElementById("fullscreen-image-button").textContent = buttonText;
    document.body.style.overflow = "hidden";
}

/* Funcion que cierra el modal de previsualizar la imagen. */
function CloseFullScreen()
{
    document.getElementById("fullscreen-image").classList.remove("visible");
    document.body.style.overflow = "auto";
}

LoadModalInDom();