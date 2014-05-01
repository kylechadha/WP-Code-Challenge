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

//// CREATE THE OVERLAY DIV AND UPDATE DOCUMENT STYLES ////

var cartOverlayDiv = document.createElement("div"); 
cartOverlayDiv.id = "cart-overlay";

var cartNumberHeader = document.createElement("h1");
var cartTotalHeader = document.createElement("h2");

var cartNumberTextNode = document.createTextNode("Items in Cart: " + numberInCart);
var cartTotalTextNode = document.createTextNode("Total: " + cartTotal);

// Style each element of the overlay
// cartOverlayDiv.style.backgroundColor = "#000"
// cartOverlayDiv.style.opacity = "0.7"
// cartOverlayDiv.style.zindex = "9999"
// cartOverlayDiv.style.position = "absolute"
// cartOverlayDiv.style.top = "0"
// cartOverlayDiv.style.left = "0"
// cartOverlayDiv.style.width = "100%"
// cartOverlayDiv.style.height = "100%"

cssOverlayStyle = "background-color: #000; opacity: 0.8; z-index: 9999; position: fixed; top: 0; left: 0; width: 100%; height: 100%; visibility: hidden;"
cartOverlayDiv.style.cssText = cssOverlayStyle;

// Connect the elements together
cartNumberHeader.appendChild(cartNumberTextNode);
cartTotalHeader.appendChild(cartTotalTextNode);
cartOverlayDiv.appendChild(cartNumberHeader);
cartOverlayDiv.appendChild(cartTotalHeader);

// Append the overlay to the body and we're ready to rock
document.body.appendChild(cartOverlayDiv); 


//// FUNCTIONS TO HIDE AND SHOW THE OVERLAY ////

function hideOverlay(){
  console.log('The hideOverlay function has been called.');
  document.getElementById("cart-overlay").style.visibility = 'hidden';
}

function showOverlay(){
  console.log('The showOverlay function has been called.');
  document.getElementById("cart-overlay").style.visibility = 'visible';
}
