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
    
    
});