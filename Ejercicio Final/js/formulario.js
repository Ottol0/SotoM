//consulta en la bd
$(document).ready(function(){
    $('#btnconsulta').click(function(){

        console.log('ctmrafa');
        let varid= $('#idconsulta').val();
        $.post('../php/formulario.php', {par1:varid}, function(data){
            
            refrescar(data);
    
        }, 'json');
       
    });
    function refrescar(objeto) {
    
        console.log(objeto);
    
        $('#Nomlibro').val(objeto.Nombre);
        $('#Autor').val(objeto.Autor);
        $('#Edicion').val(objeto.Edicion);
        $('#Editorial').val(objeto.Editorial);
        $('#Genero').val(objeto.Genero);
        $('#Fecha').val(objeto.Fecha);
        $('#Descrip').val(objeto.Descripcion);
    }
});