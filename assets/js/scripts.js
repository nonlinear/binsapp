// scroll page to the left. lacks animation, hover to return.
/*
window.addEventListener("load",function() {
 setTimeout(function(){
  window.scrollTo(0, 0);
}, 0);
});*/

// makes tabs appear on html
// http://stackoverflow.com/questions/12131273/twitter-bootstrap-tabs-url-doesnt-change

/*$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});*/

// makes dropdown works on mouseover, touchscreen devices

$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });;
$(document).ready(function() {
  $('.dropdown-toggle').dropdownHover();
  var outer = $(this).height();
  var inner = $('.scroll').height();
  if(inner > outer){
    $(".info").addClass('scrollbottom');
  }
});

// scroll affordance

$(".info").scroll(function (e) {
  var innerPos = $('.scroll').offset();
  var innerTop = $('.scroll').height() + innerPos.top;
  var diff = $(this).height()-innerTop;

  if(diff >= -15){
    $(".info").removeClass('scrollbottom');
  }else{
    $(".info").addClass('scrollbottom');
  };
  if(innerPos.top <= 0){
    $(".info").addClass('scrolltop');
  }else{
    $(".info").removeClass('scrolltop');
  };
});

 // Mobile Safari in standalone mode
if(("standalone" in window.navigator) && window.navigator.standalone){

  // If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
  var noddy, remotes = false;
  
  document.addEventListener('click', function(event) {

    noddy = event.target;
    
    // Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
    while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
      noddy = noddy.parentNode;
    }
    
    if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes))
    {
      event.preventDefault();
      document.location.href = noddy.href;
      //put an alert here and understand what the fuck is - noddy.href so we can intercept on web apps
    }

  },false);
  $('html').addClass("webapp");
}

// flexslider script

$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false, 
        slideshow: false
      });
    });