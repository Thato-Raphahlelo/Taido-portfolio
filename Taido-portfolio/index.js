
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

function scrollToAbout(){
  window.scrollTo(0, 800);
}

function scrollToTop(){
  window.scrollToTop();
}

function scrollToPort(){
  window.scrollTo(0, 1660);
}

/* $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  }); 
});

$(document).ready(function(){
  $("abtLink").on('Click', function(event){
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body'.animate({scrollTo()}));
    }
  });
}); */
