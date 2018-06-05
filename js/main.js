//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}


;(function(){

	let sticky = false
	let currentPosition = 0

	const imageCounter = $("[data-name='image-counter']").attr("content")
	console.log(imageCounter)

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)
	


	setInterval(()=>{
		if(currentPosition < imageCounter){
			currentPosition++
		}else{
			currentPosition = 0
		}

		
		$("#galeria .inner").css({
			left: "-"+currentPosition*100+"%"
		})


	},4000)
	

	$(window).scroll(()=>{
		const inBottom = isInBottom()


		if(inBottom && !sticky){
//mostar nav
sticky = true
stickNavigation()
		}if(!inBottom && sticky){
			//ocultar nav
			sticky = false
			unStickNavigation()
			
		}
	})  

function stickNavigation(){
$("#description").addClass("fixed").removeClass("absolute")

$("#navigation").slideUp("fast")
$("#sticky-navigation").slideDown("fast")
}

function unStickNavigation(){
$("#description").removeClass("fixed").addClass("absolute")

$("#navigation").slideDown("fast")
$("#sticky-navigation").slideUp("fast")
}


	function isInBottom(){
		const $description = $("#description")
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - descriptionHeight *2
	}

})()

