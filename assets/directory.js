$(document).ready(function() {

  //assigns each content section an ID
  function alphaLink() {
      var alphaLink = $(this);
      var alphaLinkRef = "#" + alphaLink.text().toLowerCase();
      $(alphaLink).attr("href", alphaLinkRef);
  };
  $('.scroller').each(alphaLink);

  //assigns each content section an ID
  function alphaID() {
      var section = $(this);
      var sectionID = section.text().toLowerCase();
      $(section).attr("ID", sectionID);
  };
  $('.alpha-heading').each(alphaID);
  $('.accordion-heading').each(alphaID);

  //adds smooth scrolling functionality
  function scrollPage() {
      var anchorItem = $(this);
      $(anchorItem).click(function() {
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top
          }, 500);
          return false;
      });
  }
  $(".scroller").each(scrollPage);
   $(".scrollup").each(scrollPage);

   //disables a alphalink without a link

   function findID(ID) {
       var exists = false;
       if ($(ID).length > 0) {
        exists = true;
       }
       return exists;
   }

   function matchLink() {
       var href = $(this).attr('href');
       if (!findID(href)) {
           // Doesn't exist
           $(this).addClass('alpha-disabled');
       }
   };
   $('.scroller').each(matchLink);



   $(window).scroll(function() {

       if ($(this).scrollTop() > 1200) {
           $('.scrollup').fadeIn();
       } else {
           $('.scrollup').fadeOut();
       }
       //keeping back to top button from extending beyond footer
       var viewer = $(window).scrollTop() + $(window).height();
       var footerLocation = $(document).height() - $(".footer").height();

       if (viewer < footerLocation) {
           $('.scrollup').css("position", "fixed");
           $('.scrollup').css("bottom", "0");
       }
       if (viewer > footerLocation) {
           $('.scrollup').css("position", "relative");
           $('.scrollup').css({
               "bottom": "60px",
               "float": "right"
           });
       }

     });

     function getCounter(){
         var count = $(this).find(".area-list").children('li').length;
         $(this).find("span.counter").text(count);
     }

     $(".accordion-item").each(getCounter);



});
