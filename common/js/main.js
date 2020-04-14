$(document).ready(function() {
    $('a#page-top').click(function() {
		$('body,html').animate({
           scrollTop: 0
			}, 1200);
   return false;
	});
	
	$('.icon-menu').click(function()
	{
		$('.menu').slideToggle();
	});
	
	
	$("#owlslider").owlCarousel({
		  autoPlay : true,
		  navigation : false, // Show next and prev buttons
		  pagination:true,
		  paginationNumbers:false,
		  slideSpeed : 1000,
		  paginationSpeed : 700,
		  singleItem: false,
		  items:3,
	 }); // owl slide
	
	
	$(window).scroll(function ()
        {
            //if you hard code, then use console
            //.log to determine when you want the
            //nav bar to stick.
            console.log($(window).scrollTop())
            if ($(window).scrollTop() > 160)
            {
                $('.wrap-menu').addClass('nav-fex-top');
            }
            if ($(window).scrollTop() < 160)
            {
                $('.wrap-menu').removeClass('nav-fex-top');
            }
        });
	
	
		
		
		
	/*$(window).scroll(function ()
        {
            //if you hard code, then use console
            //.log to determine when you want the
            //nav bar to stick.
            console.log($(window).scrollTop())
            if ($(window).scrollTop() > 5)
            {
                $('.wrap-header').addClass('nav-fex-top');
            }
            if ($(window).scrollTop() < 5)
            {
                $('.wrap-header').removeClass('nav-fex-top');
            }
        });*/
	
	
	$('.sidebar-footer-info').hide();
	
	$(".btn-title").click(function(){
			if($(this).find('img').attr('src') == 'common/img/sidebar/icon+.png'){
				$(this).find('img').attr('src','common/img/sidebar/icon-.png');
				$(this).closest('.sidebar-footer-title').find('.sidebar-footer-info').show();}
			else
			{
				$(this).find('img').attr('src','common/img/sidebar/icon+.png');
				$(this).closest('.sidebar-footer-title').find('.sidebar-footer-info').hide();
			}
				
			/*$(this).closest('.sidebar-footer-title').find('.sidebar-footer-info ul li').show();*/
		
			
		
		});
	

	

	
});