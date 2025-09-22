/* Si esta en una pagina EN */
if(window.location.pathname.startsWith("/en/"))
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showContactHomeEn();
    }
    else
    {
        showContactNotHomeEn();
    }
}
/* Si esta en una pagina ES. */
else if(window.location.pathname.startsWith("/es/"))
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showContactHomeEs();
    }
    else
    {
        showContactNotHomeEs();
    }
}
else
{
    /* Esta en Home */
    if(window.location.pathname.endsWith("home.html"))
    {
        showContactHomeEn();
    }
    else
    {
        showContactNotHomeEn();
    }
}

//Muestra el contacto en esaniol.
function showContactHomeEs(){
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

//Muestra el contacto de la pagina que no es home en espaniol.
function showContactNotHomeEs(){
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

//Muestra el contacto en ingles.
function showContactHomeEn(){
    document.getElementById("contact").innerHTML = `
    <section class="marginBox colFlexBox">
        <h1 class="centerText">CONTACT</h1>
        <form action="https://formkeep.com/f/cb60aea6d317" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="" placeholder="Entity or Individual" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="" placeholder="example@example.com" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Describe the reason for your contact here..." required></textarea>
            <button type="submit" name="" class="buttonLargue">Submit form</button>
        </form>
    </section>
    `;
}

//Muestra el contaco de la pagina que no es home en ingles.
function showContactNotHomeEn(){
    document.getElementById("contact").innerHTML = `
    <section class="marginBox colFlexBox">
        <h1 class="centerText">CONTACT</h1>
        <form action="https://formkeep.com/f/cb60aea6d317" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="" placeholder="Entity or Individual" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="" placeholder="example@example.com" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Describe the reason for your contact here..." required></textarea>
            <button type="submit" name="" class="buttonLargue">Submit form</button>
        </form>
    </section>
    `;
}