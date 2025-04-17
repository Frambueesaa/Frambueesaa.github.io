//Lenguaje del navegador.
let languageHeader = navigator.language;

switch (languageHeader) {
    case "es-ES":
        //Si esta en HOME ES
        if (window.location.pathname.endsWith("home-es.html")) {
            showHeaderHomeEs();

        //SI NO ESTA EN HOME PERO ES ESPANIOL
        } else {
            showHeaderNotHomeEs();
        }
        break;
    case "en-EN":
        //Si esta en HOME EN
        if (window.location.pathname.endsWith("home-es.html")) {
            showHeaderHomeEn();

        //SI NO ESTA EN HOME PERO ES INGLES
        } else {
            showHeaderNotHomeEn();
        }
        break;
    default:
        if (window.location.pathname.endsWith("home-es.html")) {
            showHeaderHomeEn();

        } else {
            showHeaderNotHomeEn();
        }
        break;
}

//Muestra el header en esaniol.
function showHeaderHomeEs(){
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
function showHeaderNotHomeEs(){
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
function showHeaderHomeEn(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="#who">WHO AM I</a>
        </section>
        <section>
            <a href="#projects">PROJECTS</a>
        </section>
        <section>
            <a href="#services">SERVICES</a>
        </section>
        <section class="desktopOnly">
            <a href="#products">PRODUCTS</a>
        </section>
        <section class="desktopOnly">
            <a href="#software">SOFTWARE</a>
        </section>
        <section>
            <a href="#experience">EXPERIENCE</a>
        </section>
        <section>
            <a href="#contact">CONTACT</a>
        </section>
        <section class="desktopOnly">
            <a href="#social">SOCIAL</a>
        </section>
    </nav>
    `;
}

//Muestra el header de la pagina que no es home en ingles.
function showHeaderNotHomeEn(){
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home#who">WHO AM I</a>
        </section>
        <section>
            <a href=../home"#projects">PROJECTS</a>
        </section>
        <section>
            <a href="../home#services">SERVICES</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#products">PRODUCTSS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#software">SOFTWARE</a>
        </section>
        <section>
            <a href="../home#experience">EXPERIENCE</a>
        </section>
        <section>
            <a href="../home#contact">CONTACT</a>
        </section>
        <section class="desktopOnly">
            <a href="../home#social">SOCIAL</a>
        </section>
    </nav>
    `;
}