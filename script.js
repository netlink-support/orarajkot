jQuery(document).ready(function ($) {
    consoleMessage: {
        console.log('%cCreated by %cTWK%cwww.thewebkitchen.co.uk', 'background: #13212E; color: #FFFFFF; padding: 5px 0px 5px 10px; margin: 25px 0px;', 'background: #13212E; color: #05E5C8; padding: 5px 10px 5px 0px; font-weight: bold;', 'background: #FFFFFF; padding: 5px 10px;');
	}

	bundle: {
		
	}

//	modernizer: {
//        if (!Modernizr.objectfit) {
//            $('.object-fit').each(function () {
//                var $container = $(this),
//                    imgUrl = $container.find('img').prop('src');
//                if (imgUrl) {
//                    $container
//                        .css('backgroundImage', 'url(' + imgUrl + ')')
//                        .addClass('not-compatible');
//                }
//			});
//			//$( 'body' ).addClass('no-object-fit');
//        } 
//	}

	fixedheader: {
		$(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() >= 150) {
					$('.header').addClass('fixed-header');
				}
				if ($(window).scrollTop() >= 160) {
					$('.header').addClass("transform-none");
				}
				else {
					$('.header').removeClass('fixed-header');
					$('.header').removeClass("transform-none");
				}
			});
		});
	}

	search: {
		$('.search-icon').on('click', function (e) {
			$('.searchform').toggleClass('search-open');
			$(this).toggleClass('submit-zindex');
			$('.select-lang').removeClass('transform-height');
			$('#menu-main-menu-top, .lang_dropdown').fadeOut();
			$("#s").focus();
			setTimeout(function () {
				$('.close-search').fadeIn();
			}, 300);
		});
		$('.close-search').on('click', function (e) {
			$(this).fadeOut();
			$('.searchform').removeClass('search-open');
			$('.search-icon').removeClass('submit-zindex');
			$('#menu-main-menu-top, .lang_dropdown').fadeIn();
		});
	}

	mobile: {
		///MOBILE MENU - FOR USE WITH TWK_NAV_WALKER
		/* $('.menu .menu-item-has-children > a').click(function (event) {
			event.preventDefault();
			$(this).parent().children('li .sub-menu-wrap').addClass('transform-none');
		});
		$('.back-menu').click(function () {
			$(this).parent().parent().removeClass('transform-none');
		}); */
	}

	anchorlinks: {
		$(document).on('click', '.scroll-to', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		});
	}

	externallinks: {
		$('a[href^="mailto:"]').each(function () { 
			$(this).addClass('email-link');
		});	 
		
		// $('a:not(.magnific-video, .email-link)').each(function () {
		// 	var a = new RegExp('/' + window.location.host + '/');
			
		// 	if (!a.test(this.href)) {
		// 		$(this).click(function (event) {
		// 		event.preventDefault();
		// 		window.open(this.href, '_blank');
		// 		});
		// 	}
		// });
		pdfs: {
			// Open PDFs in new window
			$(function () {
				$('a[href$=".pdf"]').prop('target', '_blank');
			});
		}
	}

	slider: {
		$('.full-width-slider').slick({
			dots: true,
            arrows: false,
            fade: true,
			autoplay: true,
			autoplaySpeed: 4500,
		});
		$('.banner-slider').slick({
			dots: true,
            arrows: false,
            fade: true,
			autoplay: true,
			autoplaySpeed: 4500,
		});


		$('.stat-slider').slick({
			dots: true,
            arrows: false,
            fade: true,
			autoplay: true,
			autoplaySpeed: 4500,
		});
		$('.reports-slider__inner').slick({
			dots: false,
            arrows: true,
			fade: false,
			centerMode: true,
			slidesToShow: 3,
			centerPadding: '100px',
			autoplay: true,
			autoplaySpeed: 4500,
			prevArrow: $('.slick-custom-prev'),
			nextArrow: $('.slick-custom-next'),
			responsive: [
				{
				  breakpoint: 789,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				
				  }
				},
				{
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					  centerMode: false
				  
					}
				  },
			]
		});
		$('.slider-full-js').slick({
			dots: false,
            arrows: true,
            fade: false,
			autoplay: true,
			autoplaySpeed: 4500,
			centerMode: true,
			slidesToShow: 1,
			variableWidth: true,
			centerPadding: '100px',
			draggable: false,
			prevArrow:'<div class="slick-prev"><svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    <title>Left arrow</title>    <defs>        <filter id="filter-1">            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.627451 0 0 0 0 0.819608 0 0 0 0 0.792157 0 0 0 1.000000 0"></feColorMatrix>        </filter>    </defs>    <g id="Support" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="Left-arrow" transform="translate(32.000000, 32.000000) scale(-1, 1) translate(-32.000000, -32.000000) ">            <circle id="Oval" fill="#223C59" cx="32" cy="32" r="32"></circle>            <g id="arrow-menu-green" stroke-linecap="round">                <g transform="translate(29.000000, 25.000000)" id="Group-2" stroke="#A0D1CA" stroke-width="2">                    <line x1="-1.09090909" y1="3.81818182" x2="9.09090909" y2="3.81818182" id="Line-4" transform="translate(4.000000, 3.818182) rotate(45.000000) translate(-4.000000, -3.818182) "></line>                    <line x1="-1.09090909" y1="11.0909091" x2="9.09090909" y2="11.0909091" id="Line-4-Copy-2" transform="translate(4.000000, 11.090909) rotate(-45.000000) translate(-4.000000, -11.090909) "></line>                </g>            </g>        </g>    </g></svg></div>',
			nextArrow:'<div class="slick-next"><svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">    <title>Right arrow</title>    <defs>        <filter id="filter-1">            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.627451 0 0 0 0 0.819608 0 0 0 0 0.792157 0 0 0 1.000000 0"></feColorMatrix>        </filter>    </defs>    <g id="Support" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="Right-arrow">            <circle id="Oval" fill="#223C59" cx="32" cy="32" r="32"></circle>            <g  id="arrow-menu-green" stroke-linecap="round">                <g transform="translate(29.046630, 24.864812)">                    <g id="Group-2" transform="translate(0.000000, 0.000000)" stroke="#A0D1CA" stroke-width="2">                        <line x1="-1.13753936" y1="3.95336973" x2="9.04427882" y2="3.95336973" id="Line-4" transform="translate(3.953370, 3.953370) rotate(45.000000) translate(-3.953370, -3.953370) "></line>                        <line x1="-1.13753936" y1="11.226097" x2="9.04427882" y2="11.226097" id="Line-4-Copy-2" transform="translate(3.953370, 11.226097) rotate(-45.000000) translate(-3.953370, -11.226097) "></line>                    </g>                </g>            </g>        </g>    </g></svg></div>'
		});
		


		/**
		 * Gallery slider with thumbnails navigation.
		 */
		var status = $('.gallery-slider__full-nav .pages');
        var slickElement = $('.gallery-slider__full');

        slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            status.text(i + ' of ' + slick.slideCount);
		});
		
		$('.gallery-slider__full').slick({
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: '.gallery-slider__thumb',
            appendArrows: '.gallery-slider__full-nav',
        });
        $('.gallery-slider__thumb').slick({
            dots: false,
            arrows: true,
            slidesToShow: 4,
            // centerMode: true,
            focusOnSelect: true,
            asNavFor: '.gallery-slider__full',
		});
		
		$('.blog-slider__slides').slick({
            dots: false,
            arrows: true,
			slidesToShow: 2,
			prevArrow: $('.slide-prev'),
			nextArrow: $('.slide-next'),
			// centerMode: true,
			responsive: [
				{
				  breakpoint: 700,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				
				  }
				},
			]
       
        }); 
	}

	magnific: {
		// IFRAME
		$('.magnific-video').magnificPopup({
			type: 'iframe'
			, mainClass: 'mfp-fade'
			, removalDelay: 160
			, preloader: false
			, fixedContentPos: false
		});

		// INLINE
		$('.inline-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
			fixedContentPos: true,
			closeMarkup: '<div title="%title%" class=" mfp-close"></div>'
		});
		

        // GALLERY IMAGE


		$(".magnific-gallery-image, .blocks-gallery-item").each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true,
					titleSrc: function(item) {
						return $(this).next('figcaption');
					}
				},
				gallery:{
					enabled:false
				}
			});
		  });
		  
	}

	/* tabs: {
		const tabs = document.querySelectorAll('[role="tab"]');
		const tabList = document.querySelector('[role="tablist"]');

		if ( tabs ) {

			// Add a click event handler to each tab
			tabs.forEach(tab => {
				tab.addEventListener("click", changeTabs);
			});

			// Enable arrow navigation between tabs in the tab list
			let tabFocus = 0;

			if ( tabList ) {
				tabList.addEventListener("keydown", e => {
					// Move right
					if (e.keyCode === 39 || e.keyCode === 37) {
					tabs[tabFocus].setAttribute("tabindex", -1);
					if (e.keyCode === 39) {
						tabFocus++;
						// If we're at the end, go to the start
						if (tabFocus >= tabs.length) {
						tabFocus = 0;
						}
						// Move left
					} else if (e.keyCode === 37) {
						tabFocus--;
						// If we're at the start, move to the end
						if (tabFocus < 0) {
						tabFocus = tabs.length - 1;
						}
					}
	
					tabs[tabFocus].setAttribute("tabindex", 0);
					tabs[tabFocus].focus();
					}
				});
			}

			function changeTabs(e) {
				console.info('tabs clicked');
				const target = e.target;
				const parent = target.parentNode;
				const grandparent = parent.closest('.tabs');


					console.info(grandparent);
				// Remove all current selected tabs
				parent
					.querySelectorAll('[aria-selected="true"]')
					.forEach(t => t.setAttribute("aria-selected", false));

				// Set this tab as selected
				target.setAttribute("aria-selected", true);

				// Hide all tab panels
				grandparent
					.querySelectorAll('[role="tabpanel"]')
					.forEach(p => p.setAttribute("hidden", true));

				// Show the selected panel
				grandparent.parentNode
					.querySelector(`#${target.getAttribute("aria-controls")}`)
					.removeAttribute("hidden");
			}

		}
	} */
	menu: { 
		let menuopen = false;
		$('.post-type-archive-news-item #menu-nested-pages > li:nth-of-type(9) .sub-menu-wrap').addClass('sub-menu-open');

	//	$('#menu-nested-pages > li:has(div ul) > a').addClass('page-has-children');
		$('.hamburger').on('click', function() {
			menuopen = true
			$(this).toggleClass('open');
			$('.nav-menu').toggleClass('open');
			$('.parent-page > a').removeClass('active');
			$('.sub-menu-wrap').removeClass('sub-menu-open');
			if ($('.hamburger span').text() == "Close") {
				$('.hamburger span').text("Menu")
			}
			else {
				$('.hamburger span').text("Close");
				setTimeout(function() {
					$('.sub-menu-slide').addClass('sub-menu-open');
				}, 300);
				
			}

		});
		$('.parent-page > a').on('click', function(e) {
			e.preventDefault();
			let menutoopen = $(this).attr('id');
			//console.log(menutoopen)
			$('.parent-page > a').removeClass('active');
			$(this).addClass('active');
			$('.sub-menu-wrap').removeClass('sub-menu-open');
			$('#sub_'+menutoopen).toggleClass('sub-menu-open');
		});
		$('.back-button').on('click', function() {
			$('.parent-page > a').removeClass('active');
			$('.sub-menu-wrap').removeClass('sub-menu-open');
		});
		

		$('#content-wrap').on('click', function() {

			if(menuopen == true) {
				//console.log('its true');
				$('.parent-page > a').removeClass('active');
				$('.sub-menu-wrap').removeClass('sub-menu-open');
				$('.hamburger').removeClass('open');
				$('.nav-menu').removeClass('open');
				$('.hamburger span').text("Menu");
				menuopen = false;
			}
			else {
				
				
				
			}
		});

		$('.post-type-archive-news-item #sub_12, .single  #sub_12, .blog #sub_12').addClass('sub-menu-slide');


		// Subsites active links on bottom menu.
		$( '#menu-footer-menu li a' ).each(function(){
			if ( $(this).attr('href') === php_vars.homeUrl || $(this).attr('href') === php_vars.homeUrl + '/' ){
				$( this ).parent().addClass('current-menu-item');
			}
		});
	}
	accordion: {
		function toggleAccordion() {

			$('.js-accordion-target').not($(this).next('.js-accordion-target')).slideUp();
			$('.js-accordion-plus').not($(this).find('.js-accordion-plus')).removeClass('active');
			$(this).next('.js-accordion-target').slideToggle();
			$(this).find('.js-accordion-plus').toggleClass('active');
		}

		const get_accordions = document.querySelectorAll(".js-accordion-trigger");
			accordions = Array.prototype.slice.call(get_accordions);

		if ( accordions.length > 0 ) {
			accordions.forEach(function(accordion) {
				accordion.addEventListener("click", toggleAccordion, false);
			});
		}
	}
	loadingAnimations: {
		$.fn.isOnScreen = function () {
			var win = $(window);
			var viewport = {
				top: win.scrollTop()
			};
			viewport.bottom = viewport.top + win.height();
		
			var bounds = this.offset();
			bounds.bottom = bounds.top + this.outerHeight();
		
			return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};

		// First load Animation
		$('.off-screen').each(function (index) {
			if ($(this).isOnScreen()) {
				$(this).removeClass('off-screen--hide');
			}
		});

		

		
	
		// Blockquotes
		$('blockquote').each(function (index) {
			if ($(this).isOnScreen()) {
				$(this).addClass('blockquote-loaded');
			}
		});

		// Animation on scroll
		$(window).scroll(function () {
			$('.off-screen').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).removeClass('off-screen--hide');
				}
			});
			$('.fade-in').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).removeClass('fade-in--active');
				}
			});
			// Blockquotes
			$('blockquote').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).addClass('blockquote-loaded');
				}
			});
			$('.image-with-statistic').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).addClass('blockquote-loaded');
				}
			});
		});

		$('.img-animate').each(function () {
			if ($(this).isOnScreen()) {
				var obj = $(this);
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 300) {
					$(this).addClass("animate-active");
				$(obj).next('div').addClass('loaded');
				}
				// setTimeout(function(obj) {   
				// 	$(obj).next('div').addClass('loaded');
				// }, 800, obj);
			};
		});

		$('.banner .img-animate').each(function () {
			
				var obj = $(this);
				
				$(this).addClass("animate-active");
				$(obj).next('div').addClass('loaded');
				
				// setTimeout(function(obj) {   
				// 	$(obj).next('div').addClass('loaded');
				// }, 800, obj);
			
		});

		$(window).scroll(function () {
			$('.img-animate').each(function () {
				var obj = $(this);
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if ($(this).isOnScreen()) {
					$(this).addClass("animate-active");
				$(obj).next('div').addClass('loaded');
				}
				// setTimeout(function(obj) {   
				// 	$(obj).next('div').addClass('loaded');
				// }, 800, obj);
			});
			$('.slide-up--scroll').each(function (index) {
                if ($(this).isOnScreen()) {
                    $(this).addClass('slide-up--loaded');
                }
            });
		});
		$('.slide-up--static').each(function (index) {
			$(this).addClass('slide-up--loaded');
		});
	}
	fadein: {
		window.fadeIn = function(obj) {
			$(obj).fadeIn(1000);
		}
		$(document).ready(function() {
			$(".fadeIn").each(function() {
				var src = $(this).data("src");
				if (src) {
					var img = new Image();
					img.style.display = "none";
					img.onload = function() {
						$(this).fadeIn(1000);
						$('.banner__shadow').fadeIn(1000);
					//	$('.fadeIn').addClass('img-fade-in');
					};
					$(this).append(img);  
					var $item = $(this);   
					
					img.src = src;
				
				}
			});
		});
	}
	sticky: {
		
	
	}

	cursor: {
		// var isonlink = false;

		// // Custom Mouse
		// function updateCustomCursorPosition(e, customCursor) {
			
		// 	const { pageX, pageY } = e;

		// 	if(isonlink) {
		// 		TweenLite.to(customCursor, 0.2, {
		// 			x: pageX,
		// 			y: pageY,
		// 			scale: 2,
		// 			opacity: 0.5
		// 		});
		// 	}		
		// 	else {
		// 		TweenLite.to(customCursor, 0.2, {
		// 			x: pageX,
		// 			y: pageY,
		// 			scale: 1
				
		// 		});
		// 	}	
			
			
		// 	updateCustomCursorStyle(e, customCursor);
		// }

		// function updateCustomCursorStyle(e, customCursor) {
			
		// 	// add custom styles to the cursor based on the target of the mouse during the mouseover event
			
		// 	const { target } = e; // destructuring
			
		// 	if (target.matches('a') || target.closest('a') || target.matches('.hamburger') || target.closest('.hamburger') ) {
		// 		customCursor.classList.add('normal-hover');
		// 		isonlink = true;
		// 	} else {
		// 		customCursor.classList.remove('normal-hover');
		// 		isonlink = false;
		// 	}
			
		// }

		// function initCustomMouse() {
			
		// 	const customCursor = document.querySelector('.custom-cursor');
			
		// 	document.addEventListener('mousemove', function(e) {
		// 		updateCustomCursorPosition(e, customCursor);
		// 	}, false);
			
		// 	document.addEventListener('wheel', function(e) {
		// 		updateCustomCursorPosition(e, customCursor);
		// 	}, false);
			
		// }

		// initCustomMouse();
	}

	/* lerpscroll: {
		class Smooth {
			constructor() {
			  // Grab the node that contains the entire scrollable area
			  this.content = document.querySelector('[data-scroll-container]')
			  // Grab what we want to lerp / parallax scroll
			  this.elems = [...this.content.querySelectorAll('[data-scroll-item]')]
			  
			  this.cache = []
			  
			  // Initialize document, bind methods, start render loop
			  this.init()
			}
			
			// Set the document height based on the height of the scrollable elements
			setHeight() {
			  document.body.style.height = this.content.clientHeight + 'px'
			}
			
			// Add metadata for each scrolling element
			setCache() {
			  this.elems.forEach((elem) => {
				const elemCache = {}
				
				// The actual element
				elemCache.el = elem
		
				// Starting position
				elemCache.sy = 0
		
				// Changed position initialized as starting position
				elemCache.dy = elemCache.sy
		
				// wat
				elemCache.ease = elem.dataset.ease
		
				// element parallax value
				elemCache.parallax = 1;
				
				// Add this to the list of scrolling element objects
				this.cache.push(elemCache)
			  })
			}
			
			// The event handler on when we scroll
			scroll() {
			  // Iterate through scrolling element objects and update
			  // metadata for the starting position
			  this.cache.forEach((el) => {
				el.sy = window.scrollY
			  })
			}
			
			// The render loop that animates the lerp scroll
			transformElem() {
			  // Iterate through each object w/ index in mind
			  this.cache.forEach((elem, i) => {
				// Calculate an ease value based on element index
				// ease will be used in lerp as the progress betweem
				// the two values
				const ease = `0.1${i}`
		
				// Calculate the element's change in position based
				// on the progress between the starting and changed
				// position
				elem.dy = lerp(elem.dy, elem.sy, ease)
		
				// Scale the scroll change up
				elem.dy = Math.floor(elem.dy * 100) / 200;
				
				// Set the actual change
				TweenMax.set(elem.el, { y: elem.dy})
			  })
		  
			  // After updating all scrolling element metadata
			  // Animate the changes
			  window.requestAnimationFrame(this.transformElem.bind(this))   
			}
			
			init() {
			  this.setHeight()
			  this.setCache()
			  
			  window.addEventListener('scroll', this.scroll.bind(this))
			  window.requestAnimationFrame(this.transformElem.bind(this))
			}
		  }
		  
		  const smooth = new Smooth()
		  
		  function lerp(a, b, n) {
			return (1 - n) * a + n * b;
		  }
	} */

	background: {
		/**
 * jQuery plugin paroller.js v1.4.6
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 **/
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define('parollerjs', ['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    let working = false;
    let scrollAction = function() {
        working = false;
    };

    let setDirection = {
        bgVertical: function (elem, bgOffset) {
            return elem.css({'background-position': 'center ' + -bgOffset + 'px'});
        },
        bgHorizontal: function (elem, bgOffset) {
            return elem.css({'background-position': -bgOffset + 'px' + ' center'});
        },
        vertical: function (elem, elemOffset, transition, oldTransform) {
            (oldTransform === 'none' ? oldTransform = '' : true);
            return elem.css({
                '-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
                '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
                'transform': 'translate(0,' + elemOffset + 'px)' + oldTransform,
                'transition': transition,
                'will-change': 'transform'
            });
        },
        horizontal: function (elem, elemOffset, transition, oldTransform) {
            (oldTransform === 'none' ? oldTransform = '' : true);
            return elem.css({
                '-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
                '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
                'transform': 'translate(' + elemOffset + 'px, 0)' + oldTransform,
                'transition': transition,
                'will-change': 'transform'
            });
        }
    };

    let setMovement = {
        factor: function (elem, width, options) {
            let dataFactor = elem.data('paroller-factor');
            let factor = (dataFactor) ? dataFactor : options.factor;
            if (width < 576) {
                let dataFactorXs = elem.data('paroller-factor-xs');
                let factorXs = (dataFactorXs) ? dataFactorXs : options.factorXs;
                return (factorXs) ? factorXs : factor;
            }
            else if (width <= 768) {
                let dataFactorSm = elem.data('paroller-factor-sm');
                let factorSm = (dataFactorSm) ? dataFactorSm : options.factorSm;
                return (factorSm) ? factorSm : factor;
            }
            else if (width <= 1024) {
                let dataFactorMd = elem.data('paroller-factor-md');
                let factorMd = (dataFactorMd) ? dataFactorMd : options.factorMd;
                return (factorMd) ? factorMd : factor;
            }
            else if (width <= 1200) {
                let dataFactorLg = elem.data('paroller-factor-lg');
                let factorLg = (dataFactorLg) ? dataFactorLg : options.factorLg;
                return (factorLg) ? factorLg : factor;
            } else if (width <= 1920) {
                let dataFactorXl = elem.data('paroller-factor-xl');
                let factorXl = (dataFactorXl) ? dataFactorXl : options.factorXl;
                return (factorXl) ? factorXl : factor;
            } else {
                return factor;
            }
        },
        bgOffset: function (offset, factor) {
            return Math.round(offset * factor);
        },
        transform: function (offset, factor, windowHeight, height) {
            return Math.round((offset - (windowHeight / 2) + height) * factor);
        }
    };

    let clearPositions = {
        background: function (elem) {
            return elem.css({'background-position': 'unset'});
        },
        foreground: function (elem) {
            return elem.css({
                'transform' : 'unset',
                'transition' : 'unset'
            });
        }
    };

    $.fn.paroller = function (options) {
        const windowHeight = $(window).height();
        const documentHeight = $(document).height();

        // default options
        options = $.extend({
            factor: 0, // - to +
            factorXs: 0, // - to +
            factorSm: 0, // - to +
            factorMd: 0, // - to +
            factorLg: 0, // - to +
            factorXl: 0, // - to +
            transition: 'transform .1s ease', // CSS transition
            type: 'background', // foreground
            direction: 'vertical' // horizontal
        }, options);

        return this.each(function () {
            const $this = $(this);
            let height = $this.outerHeight();
            let width = $(window).width();
            let elemTop = $this.offset().top;
            let scrollOffset = 0;

            let withScrollOffset = function(scrollTop, transform) {
                if (! scrollTop) {
                    scrollOffset = transform;
                }
                // console.log(`offset ${scrollOffset} => ${transform - scrollOffset}`)
                return transform - scrollOffset;
            }

            const dataType = $this.data('paroller-type');
            const dataDirection = $this.data('paroller-direction');
            const dataTransition = $this.data('paroller-transition');
            const oldTransform = $this.css('transform');

            const transition = (dataTransition) ? dataTransition : options.transition;
            const type = (dataType) ? dataType : options.type;
            const direction = (dataDirection) ? dataDirection : options.direction;
            let factor = 0;
            let bgOffset = setMovement.bgOffset(elemTop, factor);
            let transform = setMovement.transform(elemTop, factor, windowHeight, height);

            if (type === 'background') {
                if (direction === 'vertical') {
                    setDirection.bgVertical($this, bgOffset);
                }
                else if (direction === 'horizontal') {
                    setDirection.bgHorizontal($this, bgOffset);
                }
            }
            else if (type === 'foreground') {
                if (direction === 'vertical') {
                    setDirection.vertical($this, transform, transition, oldTransform);
                }
                else if (direction === 'horizontal') {
                    setDirection.horizontal($this, transform, transition, oldTransform);
                }
            }

            $(window).on('resize', function () {
                let scrolling = $(this).scrollTop();
                width = $(window).width();
                elemTop = $this.offset().top;
                height = $this.outerHeight();
                factor = setMovement.factor($this, width, options);

                bgOffset = Math.round(elemTop * factor);
                let transform = withScrollOffset($(document).scrollTop(), Math.round((elemTop - (windowHeight / 2) + height) * factor));

                if (! working) {
                    window.requestAnimationFrame(scrollAction);
                    working = true;
                }

                if (type === 'background') {
                    clearPositions.background($this);
                    if (direction === 'vertical') {
                        setDirection.bgVertical($this, bgOffset);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.bgHorizontal($this, bgOffset);
                    }
                }
                else if ((type === 'foreground') && (scrolling <= documentHeight)) {
                    clearPositions.foreground($this);
                    if (direction === 'vertical') {
                        setDirection.vertical($this, transform, transition);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.horizontal($this, transform, transition);
                    }
                }
            });

            $(window).on('load scroll', function () {
                let scrolling = $(this).scrollTop();
                let scrollTop = $(document).scrollTop();
                factor = setMovement.factor($this, width, options);
                let transform = withScrollOffset(scrollTop, Math.round(((elemTop - (windowHeight / 2) + height) - scrolling) * factor));

                if (! working) {
                    window.requestAnimationFrame(scrollAction);
                    working = true;
                }

                if (type === 'background') {
                    if (direction === 'vertical') {
                        setDirection.bgVertical($this, bgOffset);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.bgHorizontal($this, bgOffset);
                    }
                }
                else if ((type === 'foreground') && (scrolling <= documentHeight)) {
                    if (direction === 'vertical') {
                        setDirection.vertical($this, transform, transition, oldTransform);
                    }
                    else if (direction === 'horizontal') {
                        setDirection.horizontal($this, transform, transition, oldTransform);
                    }
                }
            });
        });
    };
});

		if($("[image-background-scroll]").length) {
      
            $("[image-background-scroll]").paroller({
                factor: 0.04,            // multiplier for scrolling speed and offset
                type: 'foreground',     // background, foreground
                direction: 'vertical', // vertical, horizontal
            });
			$("[image-background-scroll-bg]").paroller({
                factor: 0.04,            // multiplier for scrolling speed and offset
                type: 'background',     // background, foreground
                direction: 'vertical', // vertical, horizontal
            });
        
    }
		// $(window).scroll(function () {
		// 	parallax();
		// });
		// function parallax() {
		// 	var ev = {
		// 		scrollTop: document.body.scrollTop || document.documentElement.scrollTop
		// 	};
		// 	ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
		// 	render(ev);
		// }
		// function render(ev) { 
		// 	var t = ev.scrollTop;
		// 	var y = Math.round(t * 2/3) / 5;
		// 	$('[image-background-scroll]').css('background-position', '0 ' + y + 'px');
		// }
	}
	breadcrumbs: {  
		$('#breadcrumbs > span > span > span > a:not(.link-away)').on('click', function(e) {
		
			//console.log('clicked');    
			e.preventDefault();
			$('.hamburger').addClass('open');
			$('.nav-menu').addClass('open');   
			$('.hamburger span').text("Close");
			setTimeout(function() {
				$('.sub-menu-slide').addClass('sub-menu-open');
			}, 300);
			menuopen = true;
		});
	}
	scrollanimations: {
		if($(".js-image-move").length > 0){
            
			$('.js-image-move').each(function(){
		   
			   let trigger = $(this);
				 let element = $(this).find('.js-image-move__inner');
   

				let mouseScrollSliderTL = gsap.timeline({ });
			   let animation = gsap.fromTo(element, { yPercent: '0', }, {duration: 2, yPercent: '-10', ease: "easeOut", } );

		   ScrollTrigger.create({
			   animation: animation,
			   trigger: trigger,
//		toggleActions: "restart reset restart reset",
			   start: "top bottom",
			   end: "bottom top",
			   scrub: 1,
//				markers: true,
		   });
		   
		   
		   
	   });
		   
	   }
	}
	titles: {
		function horizontal_scroll_left() {

            var horizontal = $('.horizontal-scroll--left');

            if (horizontal) {
                var speed = 8;
                var direction = 'left';
                var startPosition = horizontal.position();
                $(window).scroll(function () {
                    var st = $(this).scrollTop();
                    var newPosition = (st * (speed / 100)) ;
                    horizontal.css({
                        'left': newPosition
                    });
                });

            }
        };

        function horizontal_scroll_right() {
			var horizontal = $('.horizontal-scroll--right');

            if (horizontal.length > 0) {
                var speed = 8;
                var direction = 'right';
                var startPosition = horizontal.position().left;
                $(window).scroll(function () {
                    var st = $(this).scrollTop();
                    var newPosition = (st * (speed / 100)) ;
                    horizontal.css({
                        'right': newPosition
                    });
                });
            }
        }
        horizontal_scroll_left();
        horizontal_scroll_right();
	}
	hotspot: {
		$('.modal-item__image img').on('click', function(){
			$('.hotspot__content').hide();
		
		});
		$('.hotspot').on('click', function(){
			$('.hotspot__content').hide();
			$(this).children('.hotspot__content').fadeIn();
		});

	}

	videoWrap: {
		$('.page-id-8395 .wp-block-column video').wrap('<div class="responsive-video"></div>');
		$('.page-id-8395 .wp-block-column img').wrap('<div class="responsive-image"></div>');
	}

	imageZoom: {
	{
		let disabled = false;
		let zoomLvl = 1.1;
		let isZoomed = false;
		const zoomImg = {	

		init() {
			document.body.addEventListener('click', e => {
				if(e.target.classList.contains('_JS_zoomIn')) { 
					isZoomed = false;
			   }
			   if(e.target.classList.contains('_JS_zoomOut')) {
					isZoomed = true;
			   }
				if (e.target.classList.contains('_JS_zoomIn') || e.target.classList.contains('_JS_zoomOut')) {
					this.controlZoomActions(e.target.parentElement.querySelector('.zoomContainer img'));
					//this.setButtonState(e.target);
				}
			
				disabled = true;
				//console.log(isZoomed);


			});
		},
		setButtonState(target) {
			// target.setAttribute('disabled', 'disabled');
			// Array.apply(null, document.querySelectorAll('._JS_zoomControls')).forEach(button => {
			// 	if (button !== target) {
			// 		button.removeAttribute('disabled');
			// 	}
			// });
		},
		controlZoomActions(target) {
			const parentDimensions = target.parentElement.getBoundingClientRect();
			
		
			if(isZoomed == false) {
				if (zoomLvl < 3) {
					$('.hotspot__content, .hotspot').hide();
					target.parentElement.style.pointerEvents = "all";
					target.setAttribute('data-zoomreset', target.getAttribute('src'));
					target.setAttribute('src', target.getAttribute('data-zoomImg'));
					target.style.width = 'auto';
					target.style.height = 'auto';
					target.parentElement.style.height = `${parentDimensions.height}px`;
					target.parentElement.style.width = `${parentDimensions.width}px`;
					this.enableDragging(target);
				
					zoomLvl = zoomLvl + 0.2;
					target.style.transform = 'scale('+zoomLvl+')';
					//console.log(zoomLvl);
					disabled = false;
				}
				else {
					isZoomed = true;
				}
			}
			
			else {
				if(zoomLvl <= 1.1) {
					zoomLvl = 1.1;
					target.style.transform = 'scale(1)';
				 	isZoomed = false;
					target.parentElement.style.pointerEvents = "none";
					disabled = true;
					target.setAttribute('src', target.getAttribute('data-zoomreset'));
					target.style.width = '';
					target.parentElement.style.height = '';
					target.removeAttribute('data-zoomreset');
					this.disableDragging(target);
					$('.hotspot__content, .hotspot').show();
				}
				else {
					//console.log(zoomLvl);
					zoomLvl = zoomLvl - 0.2;
					target.style.transform = 'scale('+zoomLvl+')';
				}
			
			}
			
		},

		
		enableDragging(target) {
			target.addEventListener('mousedown', this.dragImg);
			
			//target.addEventListener('touchmove', this.dragImg);
			disabled = false;
		},
		disableDragging(target) {
			target.style.transform = '';
			target.style.webkitTransform = '';
			target.removeEventListener('mousedown', this.dragImg);
			//target.removeEventListener('touchmove', this.dragImg);
		
		
		},
		dragImg(userEvt) {
			
			const el = userEvt.target;
			el.onmousemove = function(event){
				if(disabled == false) {
					const coords = event.clientY === undefined ? event.touches[0] : event;
					const {clientX, clientY} = coords
				
					const elDimensions = el.getBoundingClientRect();
					const parentDimensions = el.parentElement.getBoundingClientRect();
					const wMod = (elDimensions.width / parentDimensions.width); //width modifier - need to move img more than 1px right / left
					const hMod = (elDimensions.height / parentDimensions.height);
					const moveX = (clientX - parentDimensions.left) - (parentDimensions.width / 2);
					const moveY = (clientY - parentDimensions.top) - (parentDimensions.height / 2);
					let finalX;
					let finalY;
					if (Math.abs(moveX * wMod) >= Math.abs((elDimensions.width - parentDimensions.width) / 2)) {
						finalX = moveX * wMod > 0 ? (elDimensions.width - parentDimensions.width) / 2 : ((elDimensions.width - parentDimensions.width) / 2) * -1; //if it's negative, dont reset image to positive value
					} else {
						finalX = moveX * wMod;
					}
					if (Math.abs(moveY * hMod) >= Math.abs((elDimensions.height - parentDimensions.height) / 2)) {
						finalY = moveY * hMod > 0 ? (elDimensions.height - parentDimensions.height) / 2 : ((elDimensions.height - parentDimensions.height) / 2) * -1;
					} else {
						finalY = moveY * hMod
					}
					requestAnimationFrame(() => {
						el.style.transform = `translateX(${finalX}px) translateY(${finalY}px) scale(${zoomLvl})`;
						el.style.webkitTransform = `translateX(${finalX}px) translateY(${finalY}px) scale(${zoomLvl})`;
					});

			};
		}
		el.onmouseup = function(event){
			disabled = true;
		}

		el.onmousedown = function(event){
			disabled = false;
		}

		
		}
		};
		zoomImg.init();
		}
	}

});


