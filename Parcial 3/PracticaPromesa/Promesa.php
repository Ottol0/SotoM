<?php 
$registro['Regit'] = "Registro";
$registro['Nomlibro'] = 'Primera persona del singular';
$registro['Autor'] = 'Haruki Murakami';
$registro['Edicion'] = 'Original';
$registro['Editorial'] = 'TUSQUETS';
$registro['Genero'] = 'Romance';
$registro['Fecha'] = '2021-10-12';
$registro['Descrip'] = 'Cuentos cortos';

$registroJson = json_encode($registro);
echo $registroJson;
?>