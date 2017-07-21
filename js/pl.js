(function() {
  var $, $grid, filter_teaser_list, pl_ajax_trim;

  $ = jQuery;

  filter_teaser_list = function($wrapper) {
    var $list_container, category;
    category = $wrapper.find('input[type="radio"]:checked').val();
    $list_container = $wrapper.find('.teaser-list-container');
    $list_container.find('.block-thumb').show();
    if (category !== 'all') {
      $list_container.find('.block-thumb:not(.' + category + ')').hide();
    }
    if ($list_container.hasClass('masonry-grid')) {
      return $list_container.masonry('layout');
    }
  };

  $(document).on('click', '[data-load-more]', function(e) {
    var $target, url;
    e.preventDefault();
    url = $(this).data('load-more');
    $target = $($(this).data('target'));
    $.get(url, function(html) {
      var $items;
      $items = $(pl_ajax_trim(html));
      $target.append($items);
      if ($target.hasClass('masonry-grid')) {
        filter_teaser_list($target.closest('.teaser-list'));
        $target.masonry('appended', $items);
        return $target.imagesLoaded().progress(function() {
          return $target.masonry('layout');
        });
      }
    });
    return false;
  });

  $(document).on('click', '.teaser-list-filters [data-filter]', function(e) {
    filter_teaser_list($(this).closest('.teaser-list'));
    return true;
  });

  pl_ajax_trim = function(html) {
    var $result;
    $result = $('<output>').append($(html));
    if ($result.find('#pl-ajax-result').length) {
      html = $result.find('#pl-ajax-result').html();
    }
    return html;
  };

  if ($('.masonry-grid').length) {
    $grid = $('.masonry-grid').masonry({
      itemSelector: '.masonry-item',
      percentPosition: true
    });
    $grid.imagesLoaded().progress(function() {
      return $grid.masonry('layout');
    });
  }

}).call(this);
