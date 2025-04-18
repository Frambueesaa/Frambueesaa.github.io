if(window.location.pathname.endsWith("home-es.html")){
    showHeaderHomeEs();
}
else if(window.location.pathname.endsWith("es.html")){
    showHeaderNotHomeEs();
}
else if(window.location.pathname.endsWith("home-en.html")){
    showHeaderHomeEn();
}
else if(window.location.pathname.endsWith("en.html")){
    showHeaderNotHomeEn();
}
else{
    showHeaderNotHomeEs();
}

//Muestra el header en esaniol.
function showHeaderHomeEs(){
    console.log("Mostrando header en Home ES");
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
    console.log("Mostrando header NO Home ES");
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="../home-es.html#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home-es.html#who">QUI&EacuteN SOY</a>
        </section>
        <section>
            <a href=../home-es.html#projects">PROYECTOS</a>
        </section>
        <section>
            <a href="../home-es.html#services">SERVICIOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-es.html#products">PRODUCTOS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-es.html#software">SOFTWARE</a>
        </section>
        <section>
            <a href="../home-es.html#experience">EXPERIENCIA</a>
        </section>
        <section>
            <a href="../home-es.html#contact">CONTACTO</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-es.html#social">REDES</a>
        </section>
    </nav>
    `;
}

//Muestra el header en ingles.
function showHeaderHomeEn(){
    console.log("Mostrando header en Home EN");
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
    console.log("Mostrando header NO Home EN");
    document.getElementById("header").innerHTML = `
    <nav>
        <section>
            <a href="../home-en.html#start">
                <img src="../images/logo/LogoW.svg" alt="Inicio" class="icon" />
            </a>
        </section>
        <section class="desktopOnly">
            <a href="../home-en.html#who">WHO AM I</a>
        </section>
        <section>
            <a href=../home-en.html#projects">PROJECTS</a>
        </section>
        <section>
            <a href="../home-en.html#services">SERVICES</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-en.html#products">PRODUCTS</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-en.html#software">SOFTWARE</a>
        </section>
        <section>
            <a href="../home-en.html#experience">EXPERIENCE</a>
        </section>
        <section>
            <a href="../home-en.html#contact">CONTACT</a>
        </section>
        <section class="desktopOnly">
            <a href="../home-en.html#social">SOCIAL</a>
        </section>
    </nav>
    `;
}