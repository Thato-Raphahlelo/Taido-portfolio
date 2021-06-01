
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

function sideAbt(){
  hideSide();
  scrollToAbout();
}

function portAbt(){
  hideSide();
  scrollToPort();
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
  window.scrollTo(0, 720);
}

function scrollToTop(){
  if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
    window.scrollTo(0,0);
  }
}

function scrollToPort(){
  window.scrollTo(0, 1580);
}

window.onscroll = function(){activeLink()};

function activeLink(){
  var home = document.getElementById('home');
  var abt = document.getElementById('abtLink');
  var portf = document.getElementById('portLink');
  var nav = document.getElementById("nav");

  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    nav.style.background = "#000";
  }
  else{
    nav.style.background = "transparent";
  }

  if(document.body.scrollTop > 720 || document.documentElement.scrollTop > 720){
    abt.classList.add("active");
    home.classList.remove("active");
    portf.classList.remove("active");
  }
  else if(document.body.scrollTop > 1580 || document.documentElement.scrollTop > 1580){
    abt.classList.remove("active");
    home.classList.remove("active");
    portf.classList.add("active");
  }
  else{
    abt.classList.remove("active");
    home.classList.add("active");
    portf.classList.remove("active");
  }
}

function openLinkedIn(){
  window.open("https://www.linkedin.com/in/thato-motlatso-raphahlelo-558767207");
}

function openIg(){
  window.open("https://www.instagram.com/bigbagtaido/");
}

function openTwitter(){
  window.open("https://twitter.com/IssTooMuch");
}

function callPhone(){
  window.open("tel:0614318748");
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
