//// STORE NUMBER IN CART AND CART TOTAL ////

var numberInCart = document.getElementsByClassName('product-name').length
var cartTotal = document.querySelectorAll(".cart-totals .price .price")[0] ? document.querySelectorAll(".cart-totals .price .price")[0].innerHTML : "$0.00"


//// ADD LISTENER FOR SCROLL POSITION & TRIGGER FUNCTIONS ////

// Track how far down the page has been scrolled
var ROOT = (function () {
  var html = document.documentElement;
  var htmlScrollTop = html.scrollTop++;
  // Ensure measurement is cross browser compatible
  var root = html.scrollTop == htmlScrollTop + 1 ? html : document.body;
  html.scrollTop = htmlScrollTop;
  return root;
})();

// Track whether the browser has been scrolled
window.onscroll = function(){
  didScroll = true; 
}

// Take total scrollHeight and subtract the innerHeight. This results in the trigger occuring when bottom of viewport hits the threshold
var overlayLimit = (document.body.scrollHeight - window.innerHeight) * 0.9;
var overlayVisible = false;
var didScroll = false; 

// Check whether the browser has been scrolled and whether or not the viewport occupies the overlay threshold
setInterval(function(){
  if(didScroll){
    didScroll = false; 
    if (overlayVisible && ROOT.scrollTop < overlayLimit) {
      hideOverlay(); 
      overlayVisible = false; 
    } else if (!overlayVisible && ROOT.scrollTop > overlayLimit) {
      showOverlay(); 
      overlayVisible = true; 
    }
  }
}, 30);

// Functions to hide and show the overlay
function hideOverlay(){
    console.log('The hideOverlay function has been called.');
}

function showOverlay(){
    console.log('The showOverlay function has been called.');
}
