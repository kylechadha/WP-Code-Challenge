/////////////////////////////////////////////////
///////// BounceExchange Code Challenge /////////
/////////////////////////////////////////////////


//// STORE 'NUMBER IN CART' AND 'CART TOTAL' ////

document.getElementsByClassName('cart-link')[0].click();
document.getElementsByClassName('close-x')[0].click();
var numberInCart, cartTotal;

setTimeout(function() {
  numberInCart = document.getElementsByClassName('cart-total-qty')[0].innerHTML
  cartTotal = document.querySelectorAll(".cart-totals .price .price")[0] ? document.querySelectorAll(".cart-totals .price .price")[0].innerHTML : "$0.00"
}, 1500)


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
    // Recalculate overlayLimit in the instance height has changed (ie: cart was opened) 
    overlayLimit = (document.body.scrollHeight - window.innerHeight) * 0.9;
  }
}, 30);


//// CREATE THE OVERLAY DIV AND UPDATE DOCUMENT STYLES ////

setTimeout(function() {
  // Create elements that comprise the overlay
  var cartOverlayDiv = document.createElement("div"); 
  var cartOverlayInnerDiv = document.createElement("div"); 
  cartOverlayDiv.id = "cart-overlay-outer";
  cartOverlayInnerDiv.id = "cart-overlay-inner"

  var cartNumberHeader = document.createElement("h1");
  var cartTotalHeader = document.createElement("h2");

  var cartNumberTextNode = document.createTextNode("Items in Cart: " + numberInCart);
  var cartTotalTextNode = document.createTextNode("Total: " + cartTotal);

  // Style elements
  cssOverlayStyle = "background-color: #000; opacity: 0.8; z-index: 17777260; position: fixed; top: 0; left: 0; width: 100%; height: 100%; visibility: hidden;"
  cssOverlayInnerStyle = "background-color: #fff; z-index: 17777261; position: fixed; left: 30%; top: 35%; width: 40%; height: 30%; opacity: 1; visibility: hidden; color: white; text-align: center"
  cartOverlayDiv.style.cssText = cssOverlayStyle;
  cartOverlayInnerDiv.style.cssText = cssOverlayInnerStyle;

  // Connect the elements together
  cartNumberHeader.appendChild(cartNumberTextNode);
  cartTotalHeader.appendChild(cartTotalTextNode);
  cartOverlayInnerDiv.appendChild(cartNumberHeader);
  cartOverlayInnerDiv.appendChild(cartTotalHeader);
  // cartOverlayDiv.appendChild(cartOverlayInnerDiv);

  // Append the overlay to the body and we're ready to rock
  document.body.appendChild(cartOverlayDiv); 
  document.body.appendChild(cartOverlayInnerDiv); 
}, 1600)


//// FUNCTIONS TO SHOW & HIDE THE OVERLAY ////

function hideOverlay(){
  console.log('The hideOverlay function has been called.');
  document.getElementById("cart-overlay-outer").style.visibility = 'hidden';
  document.getElementById("cart-overlay-inner").style.visibility = 'hidden';
}

function showOverlay(){
  console.log('The showOverlay function has been called.');
  document.getElementById("cart-overlay-outer").style.visibility = 'visible';
  document.getElementById("cart-overlay-inner").style.visibility = 'visible';
}
