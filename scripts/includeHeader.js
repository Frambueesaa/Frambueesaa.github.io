//Lenguaje del navegador.
let language = navigator.language;

switch (language) {
    case "es-ES":
        //Si esta en HOME ES
        if (window.location.pathname.endsWith("home-es.html")) {
            showHomeEs();

        //SI NO ESTA EN HOME PERO ES ESPANIOL
        } else {
            showNotHomeEs();
        }
        break;
    case "en-EN":
        //Si esta en HOME EN
        if (window.location.pathname.endsWith("home-es.html")) {
            showHomeEn();

        //SI NO ESTA EN HOME PERO ES INGLES
        } else {
            showNotHomeEn();
        }
        break;
    default:
        if (window.location.pathname.endsWith("home-es.html")) {
            showHomeEn();

        } else {
            showNotHomeEn();
        }
        break;
}

//Muestra el header en esaniol.
function showHomeEs(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="#who">QUI&EacuteN SOY</a>
        </section>
        <section>
            <a href="#projects">PROYECTOS</a>
        </section>
        <section>
            <a href="#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#software">SOFTWARE</a>
        </section>
        <section>
            <a href="#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="#social">REDES</a>
        </section>
    </nav>
    `;
}

//Muestra el header de la pagina que no es home en espaniol.
function showNotHomeEs(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home#who">QUI&EacuteN SOY</a>
        </section>
        <section>
            <a href=../home"#projects">PROYECTOS</a>
        </section>
        <section>
            <a href="../home#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#software">SOFTWARE</a>
        </section>
        <section>
            <a href="../home#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="../home#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#social">REDES</a>
        </section>
    </nav>
    `;
}

//Muestra el header en ingles.
function showHomeEn(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="#who">QUI&EacuteN SOY</a>
        </section>
        <section>
            <a href="#projects">PROYECTOS</a>
        </section>
        <section>
            <a href="#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#software">SOFTWARE</a>
        </section>
        <section>
            <a href="#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="#social">REDES</a>
        </section>
    </nav>
    `;
}

//Muestra el header de la pagina que no es home en ingles.
function showNotHomeEn(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home#who">QUI&EacuteN SOY</a>
        </section>
        <section>
            <a href=../home"#projects">PROYECTOS</a>
        </section>
        <section>
            <a href="../home#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#software">SOFTWARE</a>
        </section>
        <section>
            <a href="../home#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="../home#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#social">REDES</a>
        </section>
    </nav>
    `;
}