
	$(document).ready(function(){
		$('.dotdotdot').dotdotdot();

		//Menu
		$('#main-menu').smartmenus({
			
		});

		$('.ic-toggler').click(function(){
			$(this).parent().find('.menu').toggleClass('show');
			$(this).toggleClass('active');
		});


		$('.slider-news').slick({
			arrows:true,
			autoplay:true,
			speed:2000,
			slidesToShow:1,
			slidesToScroll:1,
			dots:false
		});

		$('.btn-toggle-submenu').click(function(e){
			e.stopPropagation();
			$(this).parent().toggleClass('show');
		});
		$('html, body').click(function(){
			$('.header-category .main .dropdown').removeClass('show');
		});

		$('.slider-noti').slick({
			autoplay:true,
			speed:2000,
			slidesToShow:1,
			slidesToScroll:1,
			arrows:false,
			dots: false,
			vertical:true
		});
		$('.partners').slick({
			dots: false,
			speed: 2000,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			arrows: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: false,
						arrows: true,
						infinite: false
					}
				}
			]
		});
	});
