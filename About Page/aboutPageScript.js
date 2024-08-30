function navFunction() {
    document.getElementById("navigation").classList.toggle("show-nav");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.nav-button')) {
    var dropdowns = document.getElementsByClassName("nav-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-nav')) {
        openDropdown.classList.remove('show-nav');
      }
    }
  }
}