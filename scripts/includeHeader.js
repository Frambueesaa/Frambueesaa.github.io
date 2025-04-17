if (window.location.pathname.endsWith("home.html")) {
    console.log("Estamos en home.html");
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
} else {
    console.log("No estamos en home.html");
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


