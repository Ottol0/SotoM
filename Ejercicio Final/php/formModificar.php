<?php

$con = new PDO('mysql:host=localhost;dbname=l19100799', 'root', '');
$IdRegistro=$_POST['IdRegistro'];
$Nombre=$_POST['par1'];
$Autor=$_POST['par2'];
$Edicion=$_POST['par3'];
$Editorial=$_POST['par4'];
$Genero=$_POST['par5'];
$Fecha=$_POST['par6'];
$Descripcion=$_POST['par7'];

$consultaSql= " update registro set Nombre = '$Nombre', Autor = '$Autor', Edicion = '$Edicion', Editorial = '$Editorial', Genero = '$Genero', Fecha = '$Fecha', Descripcion = '$Descripcion' where IdRegistro = ". $IdRegistro;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta -> closeCursor();

echo $consultaSql;
?>