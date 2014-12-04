// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


window.onload = function() {
  $("#wettLogo").hide().delay(30).fadeIn(1700);
  $('#logout').on('click', function(e){
    // HTTPAuth Logout code based on: http://tom-mcgee.com/blog/archives/4435
    e.preventDefault();
    try {
        // This is for Firefox
        $.ajax({
            // This can be any path on your same domain which requires HTTPAuth
            url: "/contacts",
            username: 'reset',
            password: 'reset',
            // If the return is 401, refresh the page to request new details.
            statusCode: { 401: function() {
                document.location = document.location;
                }
            }
        });
    } catch (exception) {
        // Firefox throws an exception since we didn't handle anything but a 401 above
        // This line works only in IE
        if (!document.execCommand("ClearAuthenticationCache")) {
            // exeCommand returns false if it didn't work (which happens in Chrome) so as a last
            // resort refresh the page providing new, invalid details.
            document.location = "http://reset:reset@" + document.location.hostname + document.location.pathname;
        }
    }
    });
	
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
};
