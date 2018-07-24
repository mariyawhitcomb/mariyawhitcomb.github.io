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
