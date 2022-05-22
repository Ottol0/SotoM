$(document).ready(function() {
    $("#btn1").click(function() {
        $('#alerta1').show();

    });
    $('#btncloseAlert').click(function() {
        $('#alerta1').hide();
    });

    $("#btn4").click(function() {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });

    });
    
    $('#btnjsonfet').ready(function() {
        document.getElementById("btnjsonfet").addEventListener("click", function() {

            let promesa = fetch('BotonJson.php');
            promesa.then((valor) => valor.json())
                .then(data => {
                    $('#Nomlibro').val(data.Nomlibro);
                    $('#Autor').val(data.Autor);
                    $('#Edicion').val(data.Edicion);
                    $('#Editorial').val(data.Editorial);
                    $('#Genero').val(data.Genero);
                    $('#Fecha').val(data.Fecha);
                    $('#Descrip').val(data.Descrip);
                });
        })
    });

});