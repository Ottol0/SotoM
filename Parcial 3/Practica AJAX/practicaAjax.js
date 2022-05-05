$(document).ready(function() {
    $("#btn1").click(function() {
        $('#alerta1').show();

    });
    $('#btncloseAlert').click(function() {
        $('#alerta1').hide();
    });

    $("#btn2").click(function() {
        $('#modalPrim').modal();

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
                document.getElementById("Regit").innerHTML = "Registro";
            }
        };
        ajaxRequest.open("GET", "practicaAjax.php", true);
        ajaxRequest.send();
    });
});