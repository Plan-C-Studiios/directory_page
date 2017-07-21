(function() {
  var $, pass;

  $ = jQuery;

  $(document).on('on.zf.toggler', '#header-search', function() {
    if ($(window).width() < 480) {
      $(this).closest('.search-inline').addClass('drop');
    }
    return $(this).find('input').focus();
  });

  $(document).on('off.zf.toggler', '#header-search', function() {
    return $(this).closest('.search-inline').removeClass('drop');
  });

  $(document).on('click', '[data-toggle-menu]', function(e) {
    var $target;
    e.preventDefault();
    $target = $($(this).data('toggle-menu'));
    if ($(this).hasClass('active')) {
      $target.slideUp();
    } else {
      $target.slideDown();
    }
    $(this).toggleClass('active');
    return false;
  });

  $(document).on('click', '.main-nav > ul > li > .expander', function(e) {
    var $submenu;
    $submenu = $(this).nextAll('.mega-menu');
    if ($submenu.length) {
      $(this).parent().toggleClass('active');
      return false;
    }
  });

  if (!Modernizr.objectfit) {
    $('.cover-and-center').each(function() {
      var $container, imgUrl;
      $container = $(this);
      imgUrl = $container.find('img').prop('src');
      if (imgUrl) {
        $container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('compat-cover-and-center');
      }
    });
  }

  if (Modernizr.inputtypes.date) {
    pass = null;
  }

  $(document).foundation();

}).call(this);
