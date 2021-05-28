
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
    var forw = document.getElementById('forward');
    
        arr.style.transition = "opacity 0.3s ease-in-out";
        forw.style.transition = "opacity 0.3s ease-in-out";
        arr.style.opacity = "0";
        forw.style.opacity = "1"
        forw.style.fontSize = "20px";
    
    
}
