$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/JYnEbcTCyVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };
  $(function(){
    $('.img_wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      vertical: false,
      fade:true,
      // centerMode: true,
      // centerPadding: '0px',
      pauseOnHover: false,
      pauseOnFocus: false,
      asNavFor: '.comment_wraper',
      arrows: false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            vertical:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            vertical:false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            vertical:false,
          }
        },
      ]
  });
    $('.comment_wraper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      vertical: false,
      // centerMode: true,
      // centerPadding: '0px',
      pauseOnHover: false,
      pauseOnFocus: false,
      asNavFor: '.img_wrapper',
      arrows: false,
      dots:true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            vertical:false,
          }
        },
      ]
  });
  $('.show').on('click',function(){
    $('.slidebar').css('left','0px')
  })
  $('.close').on('click',function(){
    $('.slidebar').css('left','-100%')
  })
  $(document).ready(function () {
    2
      $('.main-nav').scroller();
    3
    });    
  });
  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})