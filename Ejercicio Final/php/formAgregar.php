<?php

$con = new PDO('mysql:host=localhost;dbname=l19100799', 'root', '');
$Nombre=$_POST['par1'];
$Autor=$_POST['par2'];
$Edicion=$_POST['par3'];
$Editorial=$_POST['par4'];
$Genero=$_POST['par5'];
$Fecha=$_POST['par6'];
$Descripcion=$_POST['par7'];

$consultaSql= "insert into registro(Nombre, Autor, Edicion, Editorial, Genero, Fecha, Descripcion) values
                   ('$Nombre','$Autor','$Edicion','$Editorial','$Genero','$Fecha','$Descripcion')";
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$consulta -> closeCursor();

echo $consultaSql;
?>