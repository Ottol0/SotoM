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
     

    let promesa = new Promise(function(resolve) {
        var ajaxRequest;
        ajaxRequest = new XMLHttpRequest();
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.readyState == 4) {

                resolve(ajaxRequest.responseText);
            }
        };
        ajaxRequest.open("GET", "Promesa.php", true);
        ajaxRequest.send();
    });
    promesa.then(data => document.getElementById("Regit").innerHTML = JSON.parse(data).Regit);

});