<?php

$con = new PDO('mysql:host=localhost;dbname=l19100799', 'root', '');
$IdRegistro=$_POST['IdRegistro'];

$consultaSql= "delete from registro where IdRegistro = ". $IdRegistro;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta -> closeCursor();

echo $consultaSql;
?>