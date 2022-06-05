//consulta en la bd
$(document).ready(function(){
   $('#btnconsulta').click(function(){

        
        let varid= $('#idconsulta').val();
        $.post('../php/formulario.php', {par1:varid}, function(data){
            
            refrescar(data);
    
        }, 'json');
       
    });

    $('#Agregar').click(function(){
        
        try { 
            Nombre = $('#Nomlibro').val(); 
            Autor = $('#Autor').val(); 
            Edicion = $('#Edicion').val(); 
            Editorial = $('#Editorial').val(); 
            Genero = $('#Genero').val(); 
            Fecha = $('#Fecha').val(); 
            Descripcion = $('#Descrip').val(); 

            if(($('#Nomlibro').val() || $('#Autor').val() || $('#Edicion').val() || $('#Editorial').val() || $('#Genero').val() || $('#Fecha').val() || $('#Descrip').val())=="" )
            {
                  swal( "No deje los campos vacíos");
            }
            else{
                  $.post('../php/formAgregar.php',{par1:Nombre,par2:Autor,par3:Edicion,par4:Editorial,par5:Genero,par6:Fecha,par7:Descripcion},
                  function(data){
                      console.log(data);  
                  },'json');
                  swal("Libro Agregado"); 
            } 
      } catch (exception) {
          swal("Error");
      }        
    });

    $('#Elimina').click(function(){
         
        
        $.post('../php/formEliminar.php', { IdRegistro: IdLibro }, function(data) {
            refrescar(data);
        });

        swal("Libro Eliminado");
        IdLibro = null;

    });

    $('#Modificar').click(function(){
        try { 
            
            Nombre = $('#Nomlibro').val(); 
            Autor = $('#Autor').val(); 
            Edicion = $('#Edicion').val(); 
            Editorial = $('#Editorial').val(); 
            Genero = $('#Genero').val(); 
            Fecha = $('#Fecha').val(); 
            Descripcion = $('#Descrip').val(); 

            if(($('#Nomlibro').val() || $('#Autor').val() || $('#Edicion').val() || $('#Editorial').val() || $('#Genero').val() || $('#Fecha').val() || $('#Descrip').val())=="" )
            {
                  swal( "No deje los campos vacíos");
            }
            else{
                  $.post('../php/formModificar.php',{par1:Nombre,par2:Autor,par3:Edicion,par4:Editorial,par5:Genero,par6:Fecha,par7:Descripcion, IdRegistro:IdLibro},
                  function(data){
                  },'json');
                  swal("Libro Modificado"); 
            } 
      } catch (exception) {
          swal("Error");
      }        
    });

    var IdLibro;
    function refrescar(objeto) {
        IdLibro  = objeto.IdRegistro;
        console.log(objeto.IdRegistro);
    
        $('#Nomlibro').val(objeto.Nombre);
        $('#Autor').val(objeto.Autor);
        $('#Edicion').val(objeto.Edicion);
        $('#Editorial').val(objeto.Editorial);
        $('#Genero').val(objeto.Genero);
        $('#Fecha').val(objeto.Fecha);
        $('#Descrip').val(objeto.Descripcion);
    }
});