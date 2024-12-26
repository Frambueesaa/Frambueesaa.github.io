<?php

// Declaración de variables del formulario
$nombre = $_POST['username'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Datos del email
$para = 'franforge3d@gmail.com';
$titulo = 'Contacto FranForge';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Mensaje:\n $mensaje";

if ($_POST['submit']) {

    if (mail($para, $titulo, $msjCorreo, $header))
    {
        echo "Mensaje enviado";
    } 
    else 
    {
        echo 'Falló el envio';
    }
}

?>
