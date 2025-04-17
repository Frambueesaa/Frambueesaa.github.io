if (window.location.pathname.endsWith("home.html")) {
    console.log("Estamos en home.html");
    document.getElementById("contact").innerHTML = `
    <section class="marginBox colFlexBox">
        <h1 class="centerText">CONTACTO</h1>
        <form action="https://formkeep.com/f/cb60aea6d317" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" value="" placeholder="Entidad o Particular" required />

            <label for="email">Correo electr&oacute;nico:</label>
            <input type="email" id="email" name="email" value="" placeholder="example@example.com" required />

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" placeholder="Describa el motivo de su contacto aqui..." required></textarea>
            <button type="submit" name="" class="buttonLargue">Enviar formulario</button>
        </form>
    </section>
`;
} else {
    console.log("No estamos en index.html");
    document.getElementById("contact").innerHTML = `
    <section class="marginBox colFlexBox">
        <h1 class="centerText">CONTACTO</h1>
        <form action="https://formkeep.com/f/cb60aea6d317" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" value="" placeholder="Entidad o Particular" required />

            <label for="email">Correo electr&oacute;nico:</label>
            <input type="email" id="email" name="email" value="" placeholder="example@example.com" required />

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" placeholder="Describa el motivo de su contacto aqui..." required></textarea>
            <button type="submit" name="" class="buttonLargue">Enviar formulario</button>
        </form>
    </section>
`;
}