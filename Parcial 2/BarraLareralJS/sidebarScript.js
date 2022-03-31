 var boleano = true;

document.getElementById('esconder').onclick = function ON() {
    if (boleano) {
        document.getElementById('idsidebar').classList.remove("off");
        document.getElementById('idsidebar').classList.add("on");
        boleano = false;    
    }
    else{
        document.getElementById('idsidebar').classList.remove("on");
        document.getElementById('idsidebar').classList.add("off");
        boleano = true;
    }
    }
   
