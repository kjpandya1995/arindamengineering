/**
* Template Name: BizLand
* Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
* Updated: Dec 05 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
  // if (mobileNavToggleBtn) {
  //   mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  // }

  /**
   * Hide mobile nav on same-page/hash links
   */
  // document.querySelectorAll('#navmenu a').forEach(navmenu => {
  //   navmenu.addEventListener('click', () => {
  //     if (document.querySelector('.mobile-nav-active')) {
  //       mobileNavToogle();
  //     }
  //   });

  // });

  /**
   * Toggle mobile nav dropdowns
   */
  // document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  //   navmenu.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     this.parentNode.classList.toggle('active');
  //     this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
  //     e.stopImmediatePropagation();
  //   });
  // });


    const toggleButton = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });




/**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });




// if ((".banner-slider").length > 0) {
//   (".section-image").each(function () {
//     var image = $(this).data("src");
//     $(this).css({ "background-image": "url(" + image + ")" });
//   });

//   var swiperOptions = {
//     loop: true,
//     effect: "fade",
//     grabCursor: true,
//     speed: 2000,
//     mousewheel: false,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".showcase-pagination",
//       clickable: true,
//     },
//     on: {
//       setTransition: function (speed) {
//         var swiper = this;
//         for (var i = 0; i < swiper.slides.length; i++) {
//           swiper.slides[i].style.transition = speed + "ms";
//           swiper.slides[i].querySelector(".img-mask").style.transition =
//             speed + "ms";
//         }
//       },
//     },
//   };

/* Header sticky 
		---------------------------------------------------------------------*/
		$(window).on('scroll', function() {
			//var scrollbanner = $('.banner-section ').outerHeight();
			if($(this).scrollTop() > 3 ) {
                            $('#header').addClass('sticky');
			}
			/*else if($(this).scrollTop() > 50){
				$('#header').removeClass('sticky').addClass('is-hidden');
			}*/
			else {
                            $('#header').removeClass('sticky');
			}
		});
		



var heroSwiper  = new Swiper(".hero-section .swiper", {
	effect: 'fade',
  grabCursor: true,
  speed: 2000,
  mousewheel: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".hero-pagination",
     clickable: true
	},
  
	loop: true,
  
	autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    
  
    });



  // Initialize for the first slide
 

    // on: {
    //   setTransition: function (speed) {
    //     var swiper = this;
    //     for (var i = 0; i < swiper.slides.length; i++) {
    //       swiper.slides[i].style.transition = speed + "ms";
    //       swiper.slides[i].querySelector(".img-mask").style.transition =
    //         speed + "ms";
    //     }
    //   },
    // },
//     on: {
//   setTransition(speed) {
//     this.slides.forEach(slide => {
//       slide.style.transition = `${speed}ms`;
//       const mask = slide.querySelector(".img-mask");
//       if (mask) mask.style.transition = `${speed}ms`;
//     });
//   }
// }


  // var heroSwiper = new Swiper(".hero-section", swiperOptions);
  // $(".play-pause-btn").on("click", function () {
  //   if (!$(this).hasClass("paused")) {
  //     bannerswiper.autoplay.stop();
  //     $(this).addClass("paused");
  //   } else {
  //     $(this).removeClass("paused");
  //     bannerswiper.autoplay.start();
  //   }
  //   return false;
  // });



  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }




  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);





  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });



  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /*Mobile menu click
		---------------------------------------------------------------------*/
		// $(document).on('click',"#menu", function(){
		// 	$(this).toggleClass('menuopen');
		// 	$(this).next('ul').slideToggle('normal');
		// 	return false;
		// });
		

		// $("#mainmenu  > ul > li > .sub-menu").parent('li').addClass('hasnav');
		// $("#mainmenu > ul > li.hasnav").prepend('<span class="navtrigger"></span>');

		// $(".navtrigger").on('click',function () {
		// 	if (screencheck(1023)) 
		// 	{
		// 		if($(this).parents("li.hasnav").find(".sub-menu").is(':hidden')){
		// 			$(this).addClass('open');
					
		// 			$(this).parents("li.hasnav").find(".sub-menu").slideDown('normal');
		// 		} else {
		// 			$(this).removeClass('open');
		// 			$(this).parents("li.hasnav").find(".sub-menu").slideUp('normal');
		// 		}
		// 		return false;
		// 	}
		// });


		/* Header sticky 
		---------------------------------------------------------------------*/

  $(window).on('scroll', function() {
			//var scrollbanner = $('.banner-section ').outerHeight();
			if($(this).scrollTop() > 3 ) {
                            $('#header').addClass('sticky');
			}
			/*else if($(this).scrollTop() > 50){
				$('#header').removeClass('sticky').addClass('is-hidden');
			}*/
			else {
                            $('#header').removeClass('sticky');
			}
		});
  
  /**
   * hero section
   */

// var heroSwiper  = new Swiper(".hero-section .swiper", {
// 	slidesPerView: 1,
// 	effect: 'fade',
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev"
// 	},
// 	pagination: {
// 		el: ".hero-pagination",
//      clickable: true
// 	},
// 	loop: true,
// 	autoplay: {
// 		delay: 2000,
// 	 },
// 	speed: 2000
// });



  /**
   * client section
   */

var clientSwiper = new Swiper(".client-section .swiper", {
  slidesPerView: 5,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".client-pagination",
    type: "bullets",
    clickable: true, // ✅ fixed the typo here (was clickable": true)
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  }
});

    document.getElementById('copyright-year').innerHTML = new Date().getFullYear();


  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

