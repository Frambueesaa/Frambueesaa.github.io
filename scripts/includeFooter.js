if (window.location.pathname.endsWith("home.html")) {
    console.log("Estamos en home.html");
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
} else {
    console.log("No estamos en index.html");
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