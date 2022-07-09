jQuery(document).ready(function($) {
  // Remove url text on mouseover for icons links
  $('a').each(function() {
    $(this).attr('onclick', 'window.location.href="' + $(this).attr('href') + '"');
    $(this).removeAttr('href');
  });
});


jQuery(document).ready(function($) {
  /**
   * Set footer always on the bottom of the page
   */
  function footerAlwayInBottom(footerSelector) {
    var docHeight = $(window).height();
    var footerTop = footerSelector.position().top + footerSelector.height();
    if (footerTop < docHeight) {
      footerSelector.css("margin-top", (docHeight - footerTop) + "px");
    } else {
      footerSelector.css('margin-top', '0px');
    }
  }
  // Apply when page is loading
  footerAlwayInBottom($("#footer"));

  // Apply when page is fully loaded
  $(window).on("load", function() {
    footerAlwayInBottom($("#footer"));
    $(window).trigger('resize');
  });

  // Apply when page is resizing
  $(window).resize(function() {
    footerAlwayInBottom($("#footer"));
  });

  // Apply every 25 ms
  window.setInterval(function() {
    footerAlwayInBottom($("#footer"));
  }, 25);

  $('.docs').on('click', function(e) {
    Swal.fire({
      title: 'Nice!',
      width: 700,
      text: 'I may refuse your friend request btw!',
      imageUrl: './images/discord.png',
      imageAlt: 'My discord image',
      background: '#202225',
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
      '<i class="fa fa-thumbs-down"></i> Fuck you!',
      cancelButtonAriaLabel: 'Thumbs down',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.dismiss == "cancel") {

        swal.fire({
          title: "YOU GOT RICK ROLLED",
          background: '#202225',
          width: '500px',
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> I got destroyed!',
          cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Ahaha, predictable kid.',
          showCloseButton: true,
          showCancelButton: true,
          html:
          '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
        }).then((result) => {
          if (result.dismiss == "cancel") {
            Swal.fire({
              title: "CAN'T YOU ADMIT?",
              html: "<a href='https://zenrac.wixsite.com/souriredeberserk-fs'><img src=https://i.imgur.com/ZngZTjQ.png /></a>",
              imageAlt: "BERSERK",
              confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> I am sorry!',
              confirmButtonAriaLabel: 'Thumbs up, great!',
            }).then((result) => {
              if (!result.dismiss) {
                Swal.fire({
                  title: "You're not sorry! You're a user! Gotcha",
                  width: '500px',
                  html:
                  '<iframe width="80%" height:"auto" src="https://www.youtube.com/embed/K5JLIdAPfdc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
                })
              }
            })
          }
        })
      }
    })
  });
});
