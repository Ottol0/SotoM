<?php

$idres=$_POST['par1'];

$mdb = new PDO('mysql:host=localhost;dbname=l19100799', 'root', '');
$consulta = 'SELECT * from registro where IdRegistro = '.$idres;
$rows = $mdb ->prepare($consulta);
$rows -> execute();
$cons = $rows -> fetch(pdo::FETCH_ASSOC);


$cons_uval = array_map('utf8_encode', $cons);
echo json_encode($cons_uval);

?>