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
    $("#btn5").click(function() {

        var ajaxRequest;
        ajaxRequest = new XMLHttpRequest();
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.readyState == 4) {
                document.getElementById("Regit").innerHTML = "Registro" +ajaxRequest.resposeText;
            }
        };
        ajaxRequest.open("GET", "BotonJson.php", true);
        ajaxRequest.send();
    });
    $("#btnjson").click(function() {
        $.post('BotonJson.php', {}, function(data) {
            console.log(data);
            $('#Nomlibro').val(data.Nomlibro);
            $('#Autor').val(data.Autor);
            $('#Edicion').val(data.Edicion);
            $('#Editorial').val(data.Editorial);
            $('#Genero').val(data.Genero);
            $('#Fecha').val(data.Fecha);
            $('#Descrip').val(data.Descrip);
        }, 'json');
    });

});