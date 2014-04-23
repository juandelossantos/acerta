<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="landing.css">
</head>
<body>
  <header class="header clearfix">
      <div class="logo"><img src="img/logo.png" alt="Acerta LTDA"></div>
      <div class="slogan">Aportamos experiencia y tecnología para optimizar sus procesos.</div>
  </header>

  <div class="contenido clearfix">
      <div class="center">


<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "jklopstock@acerta.com.co";
$email_subject = "Mail desde la Pagina de aterizaje de ACERTA/AEROGO";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['empresa']) ||
!isset($_POST['telefono']) ||
!isset($_POST['mensaje'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "Empresa: ". $_POST['empresa']. "\n";
$email_message .= "Teléfono: " . $_POST['telefono'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Comentarios: " . $_POST['mensaje'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo '<p style="text-align: center">¡El formulario se ha enviado con éxito!</p>';
}
?>
<div class="boton"><a href="http://www.acerta.com.co/aerogo">Volver</a></div>
</div>
<footer class="footer clearfix">


    <div class="tels">
        <p><span class="rojo">Bogotá D.C. :</span> 2575000 <span class="rojo">| Fax: </span> 2567026 <span class="rojo"> - Cali:</span> (318) 343 9282 - (310) 263 0874 <p>
        <p><span class="rojo">Medellín | Eje Cafetero: </span> 314) 861 5904 - (310) 428 3044
        <span class="rojo"> - Zona Caribe | Barrancabermeja:</span> (318) 3439400 </p>
        <p><span class="rojo">Dirección: </span> Cra 53 No. 103b - 39 | Bogotá D.C. - Colombia.</p>

    </div>

</footer>
</body>
</html>
