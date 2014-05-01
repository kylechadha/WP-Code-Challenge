// Load jQuery
var jq = document.createElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// Store number in cart and cart total
var numberInCart = $('.product-name').length
var cartTotal = $('.cart-totals .price .price')[0].innerHTML

// ADD LISTENER FOR SCROLL POSITION & TRIGGER FUNCTIONS

// Track how far down the page has been scrolled
var ROOT = (function () {
  var html = document.documentElement;
  var htmlScrollTop = html.scrollTop++;
  // Ensure measurement is cross browser compatible
  var root = html.scrollTop == htmlScrollTop + 1 ? html : document.body;
  html.scrollTop = htmlScrollTop;
  return root;
})();

// Take total scrollHeight, and subtract innerHeight so trigger happens when bottom of viewport hits threshold of 10% from the bottom
var overlayLimit = (document.body.scrollHeight - window.innerHeight) * 0.9;
var overlayVisible = false;
var last = +new Date;
var didScroll = false; 

window.onscroll = function(){
  didScroll = true; 
}

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


function hideOverlay(){
    console.log('The hideOverlay function has been called.');
}

function showOverlay(){
    console.log('The showOverlay function has been called.');
}
