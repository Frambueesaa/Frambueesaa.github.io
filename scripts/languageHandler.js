
//Lenguaje del navegador.
let language = navigator.language;

//Sobreescribir el lenguaje del navegador.
let overrideLanguage = "none";

console.log(language);

if (overrideLanguage == "none") {
    switch (language) {
        case "es-ES":
            console.log("Esta en espaniol");
            hideLanguage("en");
            break;
        case "en-EN":
            console.log("Esta en ingles");
            hideLanguage("es");
            break;
        default:
            console.log("Esta en otro idioma");
            hideLanguage("es");
            break;
    }
}
else {
    console.log("Se esta sobreescribiendo el idioma de la pagina.");
}

//Oculta un lenguaje en especifico.
function hideLanguage(className) {
    document.querySelectorAll(`.${className}`).forEach(elementClass => {
        elementClass.style.display = "none";
    });
}
