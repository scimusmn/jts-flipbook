//Init some vars
var configXML = {};
var language = '';
var translateElements = [];
var secondaryLanguage;
var secondaryLanguageLabel;

$(document).ready( function(){

	//Check for 'dc' query string. If none, use 'data-config' attribute on body tag.
	var configPath = getParameterByName('dc');
	if(!configPath) configPath = $('[data-config]').first().attr('data-config');

	//Check for 'sl' query string. If none, use 'second-language' attribute on body tag.
	secondaryLanguage = getParameterByName('sl');
	if(!secondaryLanguage) secondaryLanguage = $('[secondary-language]').first().attr('secondary-language');
	if(!secondaryLanguage) secondaryLanguage = 'es'; // Default to espanol

	//Check for 'sll' query string. If none, use 'second-language-label' attribute on body tag.
	secondaryLanguageLabel = getParameterByName('sll');
	if(!secondaryLanguageLabel) secondaryLanguageLabel = $('[secondary-language-label]').first().attr('secondary-language-label');
	if(!secondaryLanguageLabel) secondaryLanguageLabel = 'Español'; // Default to espanol

	//Load XML
	$.ajax({
	    type: "GET",
	    url: configPath, //Grab config path from index.html
	    dataType: "xml",
	    success: function (xml) {

	    	initialize( xml );

	    },
	    error: function (jqXHR, textStatus, errorThrown) {
	        // Show error message if desired
	        // alert(textStatus);
	    }
	});

	function initialize(xml) {

		configXML = xml;

		//Build slides
		$(configXML).find("slides slide").each( function(){

			var newSlide = $( ".slides .slide" ).first().clone().appendTo( $( ".swipeshow .slides" ).first() );

			var slideId = $(this).attr('id');
			var slideClass = $(this).attr('class');
			var slideBgSrc = $(this).attr('imgsrc');

			$( newSlide ).attr( 'id', slideId );
			$( newSlide ).addClass( slideClass );

			if (slideClass != 'video') {

				//Static background
				$( newSlide ).find('img').first().attr('src', slideBgSrc );

			} else {

				//Video background
				setupVideoSlide(newSlide, slideId, slideBgSrc);

			}



		});

		//Remove initial template slide
		$( ".slides .slide" ).first().remove();

		//Set up translations
		setupTranslations();

    	//Default to English
    	changeLanguage('en');

		//Init Swipeshow
		$(".my-gallery").swipeshow({

			autostart: false,   /* Set to `false` to keep it steady */
			interval: 3000,     /* Time between switching slides (ms) */
			initial: 0,         /* First slide's index */
			speed: 700,         /* Animation speed (ms) */
			friction: 0.3,      /* Bounce-back behavior; use `0` to disable */
			mouse: true,        /* enable mouse dragging controls */
			keys: true,         /* enable left/right keyboard keys */

			$next: $("div.next"), 			/* assign next button */
			$previous: $("div.previous"),	/* assign prev button */

			onactivate: function(current, index, prev, prevIndex){

				//For performance, hide gifs on previous slide
				$(prev).find('img[src$=".gif"]').hide();

				//Show gifs on current slide
				$(current).find('img[src$=".gif"]').show();

				//Pause any video on previous slide
				$(prev).find('video').each(function(){$(this)[0].pause()});

				//Play video on current slide
				$(current).find('video').each(function(){$(this)[0].play()});

				//Hide all slides outside viewport (FIX for ios 8 lag)
				$(current).parent().children('.slide').each(function(i){
					if (i == index || i == (index-1) || i == (index+1)){
						$(this).show();
					} else {
						$(this).hide();
					}
				});

			},
			onpause: function(){},

		});

		//Disable 300ms iOS delay
		FastClick.attach(document.body);

	}

	function setupVideoSlide(slideDiv, slideId, videoSrc){

		var videoId = 'video_bg_'+slideId;
		var videoTag = '<video id="'+videoId+'" class="video-js vjs-default-skin vjs-big-play-centered"><source src="'+videoSrc+'" type="video/mp4" /></video>';
		var videoOptions = { "controls": false, "children":{"loadingSpinner":false}, "width": "100%", "height":"100%", "autoplay": false, "loop": "true", "preload": "auto" };

		//Append to html
		$(slideDiv).prepend( videoTag );

		//Initialize player
		var videoPlayer = videojs(videoId, videoOptions, function() {
			// Player (this) is initialized and ready.
		});

	}

	function setupTranslations( ) {

		//Cache all elements that have corresponding tranlations
		$("body").find("p,h1,h2,h3,span").each( function() {

			//Retrieve text from xml
			var englishTranslation = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( 'en' ).first().text();
			var spanishTranslation = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( secondaryLanguage ).first().text();

			if (englishTranslation == '' || spanishTranslation == '' ) return;

			translateElements.push( this );

		});

		//Set up language toggle
    	$( ".language-toggle" ).on( "click", function(){

    		if ( language == 'en' ) {

    			changeLanguage(secondaryLanguage);

    		} else if( language == secondaryLanguage) {

    			changeLanguage('en');

    		}

    	});

	}

});

function changeLanguage( languageKey ) {

	language = languageKey;

	if ( language == secondaryLanguage ) {

		$("#language-text").html("English").removeClass('highlight');

	} else if( language == 'en') {

		console.log('secondaryLanguageLabel', secondaryLanguageLabel);
		$("#language-text").html(secondaryLanguageLabel).addClass('highlight');

	}

	//Using small timeout so user sees button change as instant feedback
	setTimeout(function(){

		$(translateElements).each( function() {

			var translationText = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( language ).first().text();
			$(this).html( translationText );

		});

		if ( language == secondaryLanguage ) {

			$(".my-gallery").addClass('shrink-text');

		} else if( language == 'en') {

			$(".my-gallery").removeClass('shrink-text');

		}

	}, 30);


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

