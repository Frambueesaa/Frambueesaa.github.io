if(window.location.pathname.endsWith("home-es.html")){
    showFooterHomeEs();
}
else if(window.location.pathname.endsWith("es.html")){
    showFooterNotHomeEs();
}
else if(window.location.pathname.endsWith("home-en.html")){
    showFooterHomeEn();
}
else if(window.location.pathname.endsWith("en.html")){
    showFooterNotHomeEn();
}
else{
    showFooterNotHomeEs();
}

//Muestra el contacto en esaniol.
function showFooterHomeEs(){
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
function showFooterNotHomeEs(){
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
                <a href="../home-es.html#start" class="boldText">INICIO</a>
                <a href="../home-es.html#who" class="boldText">QUI&EacuteN SOY</a>
                <a href="../home-es.html#projects" class="boldText">PROYECTOS</a>
                <a href="../home-es.html#services" class="boldText">SERVICIOS</a>
                <a href="../home-es.html#products" class="boldText">PRODUCTOS</a>
                <a href="../home-es.html#engines" class="boldText">MOTORES GR&AacuteFICOS</a>
                <a href="../home-es.html#languages" class="boldText">LENGUAJES</a>
                <a href="../home-es.html#experience" class="boldText">EXPERIENCIA</a>
            </nav>

        </section>
    </section>
    `;
}

//Muestra el contacto en ingles.
function showFooterHomeEn(){
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
                <h1 class="centerText">NAVIGATION</h1>
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
function showFooterNotHomeEn(){
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
                <h1 class="centerText">NAVIGATION</h1>
                <a href="../home-en.html#start" class="boldText">START</a>
                <a href="../home-en.html#who" class="boldText">WHO AM I</a>
                <a href="../home-en.html#projects" class="boldText">PROJECTS</a>
                <a href="../home-en.html#services" class="boldText">SERVICES</a>
                <a href="../home-en.html#products" class="boldText">PRODUCTS</a>
                <a href="../home-en.html#engines" class="boldText">GRAPHICS ENGINES</a>
                <a href="../home-en.html#languages" class="boldText">LANGUAGES</a>
                <a href="../home-en.html#experience" class="boldText">EXPERIENCE</a>
            </nav>

        </section>
    </section>
    `;
}