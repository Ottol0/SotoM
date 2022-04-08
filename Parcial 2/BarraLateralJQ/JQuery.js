var boleano = true;

$('.esconder').click(function ON() {
    if (boleano) {
        $('#idsidebar').removeClass("off");
        $('#idsidebar').addClass("on");
        boleano = false;    
    }
    else{
        $('#idsidebar').removeClass("on");
        $('#idsidebar').addClass("off");
        boleano = true;
    }
});