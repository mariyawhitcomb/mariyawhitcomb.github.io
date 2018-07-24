//fixed navigation function
jQuery(function($) {
  function fixDiv() {
    var $cache = $("#getFixed");
    if ($(window).scrollTop() > 130)
      $cache.css({
        display: "block",
        position: "fixed",
        top: "0px"
      });
    else
      $cache.css({
        position: "relative",
        top: "auto",
        display: "none"
      });
  }
  $(window).scroll(fixDiv);
  fixDiv();
});
// const projects = document.querySelectorAll(".project");

// function toggleOpen() {
//   this.classList.toggle("open");
// }

// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes("flex")) {
//     this.classList.toggle("open-active");
//   }
// }

// projects.forEach(project => project.addEventListener("click", toggleOpen));
// projects.forEach(project =>
//   project.addEventListener("transitionend", toggleActive)
// );
