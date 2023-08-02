/*==============================
    This is Nav Sticky
===============================*/
const header = document.querySelector('.header');
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 20) {
    header.classList.add('nav-sticky');
  } else {
    header.classList.remove('nav-sticky');
  }
};

/*========================================
    This is Initiate portfolio lightbox 
=========================================*/
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
});


/*========================================
    This is Portfolio details slider
=========================================*/
new Swiper('.portfolio-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/*==============================
    This is Back to Top Button
===============================*/

// let mybutton = document.getElementById("myBtn");
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
