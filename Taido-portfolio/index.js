
function hideSide(){
    var element = document.getElementById('SC');

        element.style.transition = "opacity 0.3s ease-in-out top 0.3s ease-in-out";
        element.style.opacity = "0";
        element.style.top = "-100%";
}

function showSide(){
    var element = document.getElementById('SC');
    element.style.transition = "opacity 0.3s ease-in-out top 0.3s ease-in-out";
    element.style.opacity = "1";
    element.style.top = "0%";
}

function iconSwitch(){
    var btn = document.getElementById('ConBtn');
    var arr = document.getElementById('arrow');
    if(btn.onmouseover == true){
        arr.style.transition = "opacity 0.3s ease-in-out";
        arr.style.opacity = "0";
    }
    else{
        arr.style.transition = "opacity 0.3s ease-in-out";
        arr.style.opacity = "1";
    }
    
}
