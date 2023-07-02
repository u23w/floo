$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});


// Add active class to the clicked link
var navItems = document.querySelectorAll('nav a');
navItems.forEach(function(item) {
  item.addEventListener('click', function() {
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});
