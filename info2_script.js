// trigger this function every time the user scrolls
window.onscroll = function(event) {
  var section1 = document.getElementById("info2_content");
  var rect = section1.getBoundingClientRect();

  var navbar = document.getElementById("nav_bar");

  var sectiontop = rect.top;

  if (sectiontop <= 40) {
    navbar.style.backgroundColor = "var(--cream)";
    navbar.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navbar.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0)";
  }
}
