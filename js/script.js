//paralax
    $('div.bgParallax').each(function() {
        var $obj = $(this);
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $obj.data('speed'));
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);
        });
    });
//smooth scrolling
	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
//menu

$('document').ready(function() {

    $('.burger').click(function() {
        $('.nav-menu').toggleClass("open");
        $('.menu-list').toggleClass("list-open");
    });

});

