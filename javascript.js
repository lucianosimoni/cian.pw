function mobileMenuFunction(x) {
  x.classList.toggle("change");
  
  var x = document.getElementById("myMenu");
  if (x.className === "header-div-menu") {
    x.className += " responsive";
  } else {
    x.className = "header-div-menu"
  }
}