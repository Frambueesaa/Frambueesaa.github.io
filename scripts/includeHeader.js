console.log(window.location.pathname);

/* Si esta en una pagina EN */
if(window.location.pathname.startsWith("/en/"))
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showHeaderHomeEn();
    }
    else
    {
        showHeaderNotHomeEn();
    }
}
/* Si esta en una pagina ES. */
else if(window.location.pathname.startsWith("/es/"))
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showHeaderHomeEs();
    }
    else
    {
        showHeaderNotHomeEs();
    }
}
else
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showHeaderHomeEn();
    }
    else
    {
        showHeaderNotHomeEn();
    }
}

//Muestra el header en esaniol.
function showHeaderHomeEs(){
    console.log("Mostrando header en Home ES");
    let newIdiomePath = window.location.pathname;
    newIdiomePath = newIdiomePath.replace("/es/", "/en/")
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="#who">QUI&EacuteN SOY</a>
        </section>
        <section class="desktopOnly">
            <a href="#projects">PROYECTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="#software">SOFTWARE</a>
        </section>
        <section class="desktopOnly">
            <a href="#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="#social">REDES</a>
        </section>

        <!-- IDIOMA -->
        <section>
            <a href="${newIdiomePath}" class="spacedCenteredFlexBox icon">
                <img src="../images/icons/web.svg" class="invert" alt="Language" />
                <p>ES</p>
            </a>
        </section>
    </nav>
    `;
}

//Muestra el header de la pagina que no es home en espaniol.
function showHeaderNotHomeEs(){
    console.log("Mostrando header NO Home ES");
    let newIdiomePath = window.location.pathname;
    newIdiomePath = newIdiomePath.replace("/es/", "/en/")
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="../home.html#start">
                <img src="../../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#who">QUI&EacuteN SOY</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#projects">PROYECTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#software">SOFTWARE</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="../home.html#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-es.html#social">REDES</a>
        </section>

        <!-- IDIOMA -->
        <section>
            <a href="${newIdiomePath}" class="spacedCenteredFlexBox icon">
                <img src="../../images/icons/web.svg" class="invert" alt="Language" />
                <p>ES</p>
            </a>
        </section>
    </nav>
    `;
}

//Muestra el header en ingles.
function showHeaderHomeEn(){
    console.log("Mostrando header en Home EN");
    let newIdiomePath = window.location.pathname;
    newIdiomePath = newIdiomePath.replace("/en/", "/es/")
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="#who">WHO I AM</a>
        </section>
        <section class="desktopOnly">
            <a href="#projects">PROJECTS</a>
        </section>
        <section class="desktopOnly">
            <a href="#services">SERVICES</a>
        </section>
        <section class="desktopOnly">
            <a href="#products">PRODUCTS</a>
        </section>
        <section class="desktopOnly">
            <a href="#software">SOFTWARE</a>
        </section>
        <section class="desktopOnly">
            <a href="#experience">EXPERIENCE</a>
        </section>
        <section>
            <a href="#contact">CONTACT</a>
        </section>
        <section class="desktopOnly">
            <a href="#social">SOCIAL</a>
        </section>

        <!-- IDIOMA -->
        <section>
            <a href="${newIdiomePath}" class="spacedCenteredFlexBox icon">
                <img src="../images/icons/web.svg" class="invert" alt="Language" />
                <p>EN</p>
            </a>
        </section>
    </nav>
    `;
}

//Muestra el header de la pagina que no es home en ingles.
function showHeaderNotHomeEn(){
    console.log("Mostrando header NO Home EN");
    let newIdiomePath = window.location.pathname;
    newIdiomePath = newIdiomePath.replace("/en/", "/es/")
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="../home.html#start">
                <img src="../../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#who">WHO I AM</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#projects">PROJECTS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#services">SERVICES</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#products">PRODUCTS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#software">SOFTWARE</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#experience">EXPERIENCE</a>
        </section>
        <section>
            <a href="../home.html#contact">CONTACT</a>
        </section>
        <section class="desktopOnly">
            <a href="../home.html#social">SOCIAL</a>
        </section>

        <!-- IDIOMA -->
        <section>
            <a href="${newIdiomePath}" class="spacedCenteredFlexBox icon">
                <img src="../../images/icons/web.svg" class="invert" alt="Language" />
                <p>EN</p>
            </a>
        </section>
    </nav>
    `;
}