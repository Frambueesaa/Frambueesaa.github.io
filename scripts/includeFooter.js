if (window.location.pathname.endsWith("index.html")) {
    console.log("Estamos en index.html");
    document.getElementById("footer").innerHTML = `
    <section>
        <h2 class="es">Redes</h2>
        <h2 class="en">Social</h2>
        <article class="row">
            <!-- TWITTER -->
            <a href="https://x.com/EntharielGames" target="_blank">
                <section class="twitter social"></section>
            </a>
            <!-- INSTAGRAM -->
            <a href="https://www.instagram.com/entharielgames/" target="_blank">
                <section class="instagram social"></section>
            </a>
            <!-- LINKEDIN -->
            <a href="https://es.linkedin.com/company/enthariel-games" target="_blank">
                <section class="linkedin social"></section>
            </a>
            <!-- YOUTUBE -->
            <a href="https://www.youtube.com/@EntharielGames" target="_blank">
                <section class="youtube social"></section>
            </a>
        </article>
    </section>

    <a href="https://maps.app.goo.gl/eM6ULEpkJdiXW6tj8" target="_blank">
        <h2 class="es">Ubicacion</h2>
        <p class="es">Universidad Pablo de Olavide (UPO Autovia A-376, Km 1. Edificio 45. Alexander von Humboldt, 41013 Sevilla</p>
    </a>

    <a href="mailto:entharielgames.gmail.com">
        <h2 class="es">Soporte</h2>
        <p class="es yellow">entharielgames.gmail.com</p>
    </a>
`;
} else {
    console.log("No estamos en index.html");
    document.getElementById("footer").innerHTML = `
    <section>
        <h2 class="es">Redes</h2>
        <h2 class="en">Social</h2>
        <article class="row">
            <!-- TWITTER -->
            <a href="https://x.com/EntharielGames" target="_blank">
                <section class="twitter social"></section>
            </a>
            <!-- INSTAGRAM -->
            <a href="https://www.instagram.com/entharielgames/" target="_blank">
                <section class="instagram social"></section>
            </a>
            <!-- LINKEDIN -->
            <a href="https://es.linkedin.com/company/enthariel-games" target="_blank">
                <section class="linkedin social"></section>
            </a>
            <!-- YOUTUBE -->
            <a href="https://www.youtube.com/@EntharielGames" target="_blank">
                <section class="youtube social"></section>
            </a>
        </article>
    </section>

    <a href="https://maps.app.goo.gl/eM6ULEpkJdiXW6tj8" target="_blank">
        <h2 class="es">Ubicacion</h2>
        <p class="es">Universidad Pablo de Olavide (UPO Autovia A-376, Km 1. Edificio 45. Alexander von Humboldt, 41013 Sevilla</p>
    </a>

    <a href="mailto:entharielgames.gmail.com">
        <h2 class="es">Soporte</h2>
        <p class="es yellow">entharielgames.gmail.com</p>
    </a>
`;
}