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