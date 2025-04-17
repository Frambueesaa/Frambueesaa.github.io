//Lenguaje del navegador.
let languageFooter = navigator.language;
console.log("Contact:" + languageFooter);

switch (languageFooter) {
    case "es-ES":
        //Si esta en HOME ES
        if (window.location.pathname.endsWith("home-es.html")) {
            showContactHomeEs();

        //SI NO ESTA EN HOME PERO ES ESPANIOL
        } else {
            showContactNotHomeEs();
        }
        break;
    case "en-EN":
        //Si esta en HOME EN
        if (window.location.pathname.endsWith("home-es.html")) {
            showContactHomeEn();

        //SI NO ESTA EN HOME PERO ES INGLES
        } else {
            showContactNotHomeEn();
        }
        break;
    default:
        if (window.location.pathname.endsWith("home-es.html")) {
            showContactHomeEn();

        } else {
            showContactNotHomeEn();
        }
        break;
}

//Muestra el contacto en esaniol.
function showContactHomeEs(){
    document.getElementById("footer").innerHTML = `
    <section class="marginBox flexBox wrap">
        <section class="flex50">

            <!-- REDES SOCIALES -->
            <section>
                <h1 id="social" class="centerText">REDES SOCIALES</h1>
                <article class="flexBox">
                    <!-- TWITTER -->
                    <a href="https://x.com/FranForge" target="_blank" class="twitterInverted boxMin5h boxMin5w icon"></a>

                    <!-- INSTAGRAM -->
                    <a href="https://www.instagram.com/franforge.dev/" target="_blank" class="instagramInverted boxMin5h boxMin5w icon"></a>

                    <!-- LINKEDIN -->
                    <a href="https://www.linkedin.com/in/francisco-jesús-huerta-hervas-047717277/" target="_blank" class="linkedinInverted boxMin5h boxMin5w icon"></a>

                    <!-- TIKTOK -->
                    <a href="https://www.tiktok.com/@franforgedev" target="_blank" class="tiktokInverted boxMin5h boxMin5w icon"></a>

                    <!-- YOUTUBE -->
                    <a href="https://www.youtube.com/@FranForge/videos" target="_blank" class="youtubeInverted boxMin5h boxMin5w icon"></a>

                    <!-- GMAIL -->
                    <a href="mailto:franforge3d@gmail.com" target="_blank" class="gmailInverted boxMin5h boxMin5w icon"></a>
                </article>
            </section>

            <br />

            <nav class="flex50 centerBox">
                <h1 class="centerText">NAVEGACI&OacuteN</h1>
                <a href="#start" class="boldText">INICIO</a>
                <a href="#who" class="boldText">QUI&EacuteN SOY</a>
                <a href="#projects" class="boldText">PROYECTOS</a>
                <a href="#services" class="boldText">SERVICIOS</a>
                <a href="#products" class="boldText">PRODUCTOS</a>
                <a href="#engines" class="boldText">MOTORES GR&AacuteFICOS</a>
                <a href="#languages" class="boldText">LENGUAJES</a>
                <a href="#experience" class="boldText">EXPERIENCIA</a>
            </nav>

        </section>
    </section>
    `;
}

//Muestra el contacto de la pagina que no es home en espaniol.
function showContactNotHomeEs(){
    document.getElementById("footer").innerHTML = `
    <section class="marginBox flexBox wrap">
        <section class="flex50">

            <!-- REDES SOCIALES -->
            <section>
                <h1 id="social" class="centerText">REDES SOCIALES</h1>
                <article class="flexBox">
                    <!-- TWITTER -->
                    <a href="https://x.com/FranForge" target="_blank" class="twitterInverted boxMin5h boxMin5w icon"></a>

                    <!-- INSTAGRAM -->
                    <a href="https://www.instagram.com/franforge.dev/" target="_blank" class="instagramInverted boxMin5h boxMin5w icon"></a>

                    <!-- LINKEDIN -->
                    <a href="https://www.linkedin.com/in/francisco-jesús-huerta-hervas-047717277/" target="_blank" class="linkedinInverted boxMin5h boxMin5w icon"></a>

                    <!-- TIKTOK -->
                    <a href="https://www.tiktok.com/@franforgedev" target="_blank" class="tiktokInverted boxMin5h boxMin5w icon"></a>

                    <!-- YOUTUBE -->
                    <a href="https://www.youtube.com/@FranForge/videos" target="_blank" class="youtubeInverted boxMin5h boxMin5w icon"></a>

                    <!-- GMAIL -->
                    <a href="mailto:franforge3d@gmail.com" target="_blank" class="gmailInverted boxMin5h boxMin5w icon"></a>
                </article>
            </section>

            <br />

            <nav class="flex50 centerBox">
                <h1 class="centerText">NAVEGACI&OacuteN</h1>
                <a href="../index#start" class="boldText">INICIO</a>
                <a href="../index#who" class="boldText">QUI&EacuteN SOY</a>
                <a href="../index#projects" class="boldText">PROYECTOS</a>
                <a href="../index#services" class="boldText">SERVICIOS</a>
                <a href="../index#products" class="boldText">PRODUCTOS</a>
                <a href="../index#engines" class="boldText">MOTORES GR&AacuteFICOS</a>
                <a href="../index#languages" class="boldText">LENGUAJES</a>
                <a href="../index#experience" class="boldText">EXPERIENCIA</a>
            </nav>

        </section>
    </section>
    `;
}

//Muestra el contacto en ingles.
function showContactHomeEn(){
    document.getElementById("footer").innerHTML = `
    <section class="marginBox flexBox wrap">
        <section class="flex50">

            <!-- REDES SOCIALES -->
            <section>
                <h1 id="social" class="centerText">SOCIAL NETWORKS</h1>
                <article class="flexBox">
                    <!-- TWITTER -->
                    <a href="https://x.com/FranForge" target="_blank" class="twitterInverted boxMin5h boxMin5w icon"></a>

                    <!-- INSTAGRAM -->
                    <a href="https://www.instagram.com/franforge.dev/" target="_blank" class="instagramInverted boxMin5h boxMin5w icon"></a>

                    <!-- LINKEDIN -->
                    <a href="https://www.linkedin.com/in/francisco-jesús-huerta-hervas-047717277/" target="_blank" class="linkedinInverted boxMin5h boxMin5w icon"></a>

                    <!-- TIKTOK -->
                    <a href="https://www.tiktok.com/@franforgedev" target="_blank" class="tiktokInverted boxMin5h boxMin5w icon"></a>

                    <!-- YOUTUBE -->
                    <a href="https://www.youtube.com/@FranForge/videos" target="_blank" class="youtubeInverted boxMin5h boxMin5w icon"></a>

                    <!-- GMAIL -->
                    <a href="mailto:franforge3d@gmail.com" target="_blank" class="gmailInverted boxMin5h boxMin5w icon"></a>
                </article>
            </section>

            <br />

            <nav class="flex50 centerBox">
                <h1 class="centerText">NAVEGACI&OacuteN</h1>
                <a href="#start" class="boldText">START</a>
                <a href="#who" class="boldText">WHO AM I</a>
                <a href="#projects" class="boldText">PROJECTS</a>
                <a href="#services" class="boldText">SERVICESS</a>
                <a href="#products" class="boldText">PRODUCTS</a>
                <a href="#engines" class="boldText">GRAPHICS ENGINES</a>
                <a href="#languages" class="boldText">LANGUAGES</a>
                <a href="#experience" class="boldText">EXPERIENCE</a>
            </nav>

        </section>
    </section>
    `;
}

//Muestra el contaco de la pagina que no es home en ingles.
function showContactNotHomeEn(){
    document.getElementById("footer").innerHTML = `
    <section class="marginBox flexBox wrap">
        <section class="flex50">

            <!-- REDES SOCIALES -->
            <section>
                <h1 id="social" class="centerText">SOCIAL NETWORKS</h1>
                <article class="flexBox">
                    <!-- TWITTER -->
                    <a href="https://x.com/FranForge" target="_blank" class="twitterInverted boxMin5h boxMin5w icon"></a>

                    <!-- INSTAGRAM -->
                    <a href="https://www.instagram.com/franforge.dev/" target="_blank" class="instagramInverted boxMin5h boxMin5w icon"></a>

                    <!-- LINKEDIN -->
                    <a href="https://www.linkedin.com/in/francisco-jesús-huerta-hervas-047717277/" target="_blank" class="linkedinInverted boxMin5h boxMin5w icon"></a>

                    <!-- TIKTOK -->
                    <a href="https://www.tiktok.com/@franforgedev" target="_blank" class="tiktokInverted boxMin5h boxMin5w icon"></a>

                    <!-- YOUTUBE -->
                    <a href="https://www.youtube.com/@FranForge/videos" target="_blank" class="youtubeInverted boxMin5h boxMin5w icon"></a>

                    <!-- GMAIL -->
                    <a href="mailto:franforge3d@gmail.com" target="_blank" class="gmailInverted boxMin5h boxMin5w icon"></a>
                </article>
            </section>

            <br />

            <nav class="flex50 centerBox">
                <h1 class="centerText">NAVEGACI&OacuteN</h1>
                <a href="../index#start" class="boldText">START</a>
                <a href="../index#who" class="boldText">WHO AM I</a>
                <a href="../index#projects" class="boldText">PROJECTS</a>
                <a href="../index#services" class="boldText">SERVICES</a>
                <a href="../index#products" class="boldText">PRODUCTS</a>
                <a href="../index#engines" class="boldText">GRAPHICS ENGINES</a>
                <a href="../index#languages" class="boldText">LANGUAGES</a>
                <a href="../index#experience" class="boldText">EXPERIENCE</a>
            </nav>

        </section>
    </section>
    `;
}