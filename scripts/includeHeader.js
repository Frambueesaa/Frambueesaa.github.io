if (window.location.pathname.endsWith("index.html")) {
    console.log("Estamos en index.html");
    document.getElementById("header").innerHTML = `
    <a href="index.html#start" class="logoDegree"></a>
    <a href="index.html#news" class="mobileHidden">
        <p class="es">NOTICIAS</p>
        <p class="en">NEWS</p>
    </a>
    <a href="index.html#games" class="mobileHidden">
        <p class="es">JUEGOS</p>
        <p class="en">GAMES</p>
    </a>
    <!-- TWITTER -->
    <a href="https://x.com/EntharielGames" class="mobileHidden" target="_blank">
        <section class="twitter social"></section>
    </a>
    <!-- INSTAGRAM -->
    <a href="https://www.instagram.com/entharielgames/" class="mobileHidden" target="_blank">
        <section class="instagram social"></section>
    </a>
    <!-- LINKEDIN -->
    <a href="https://es.linkedin.com/company/enthariel-games" class="mobileHidden" target="_blank">
        <section class="linkedin social"></section>
    </a>
    <!-- YOUTUBE -->
    <a href="https://www.youtube.com/@EntharielGames" class="mobileHidden" target="_blank">
        <section class="youtube social"></section>
    </a>
`;
} else {
    console.log("No estamos en index.html");
    document.getElementById("header").innerHTML = `
    <a href="../index.html#start" class="logoDegree"></a>
    <a href="../index.html#news" class="mobileHidden">
        <p class="es">NOTICIAS</p>
        <p class="en">NEWS</p>
    </a>
    <a href="../index.html#games" class="mobileHidden">
        <p class="es">JUEGOS</p>
        <p class="en">GAMES</p>
    </a>
    <!-- TWITTER -->
    <a href="https://x.com/EntharielGames" class="mobileHidden" target="_blank">
        <section class="twitter social"></section>
    </a>
    <!-- INSTAGRAM -->
    <a href="https://www.instagram.com/entharielgames/" class="mobileHidden" target="_blank">
        <section class="instagram social"></section>
    </a>
    <!-- LINKEDIN -->
    <a href="https://es.linkedin.com/company/enthariel-games" class="mobileHidden" target="_blank">
        <section class="linkedin social"></section>
    </a>
    <!-- YOUTUBE -->
    <a href="https://www.youtube.com/@EntharielGames" class="mobileHidden" target="_blank">
        <section class="youtube social"></section>
    </a>
`;
}


