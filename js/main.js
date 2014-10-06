$(document).ready( function(){

	//Load XML
	$.ajax({
	    type: "GET",
	    url: $('[data-config]').first().attr('data-config'), //Grab config path from index.html
	    dataType: "xml",
	    success: function (xml) {
	    	
	    	initialize( xml );
			
	    },
	    error: function (jqXHR, textStatus, errorThrown) {
	        // Show error message if desired
	        // alert(textStatus);
	    }
	});

	//Init some vars
	var configXML = {};
	var language = '';
	var translateElements = [];

	function initialize(xml) {

		configXML = xml;

		//Build slides
		$(configXML).find("slides slide").each( function(){

			var newSlide = $( ".slides .slide" ).first().clone().appendTo( $( ".swipeshow .slides" ).first() );

			$( newSlide ).attr( 'id', $(this).attr('id') );
			$( newSlide ).find('img').first().attr('src', $(this).attr('imgsrc') );
			$( newSlide ).addClass( $(this).attr('class') );

		});

		//Remove initial template slide
		$( ".slides .slide" ).first().remove();

		//Set up tranlations
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

			onactivate: function(){},
			onpause: function(){},

		});

		//Disable 300ms iOS delay on clicks for more responsiveness
		FastClick.attach(document.body);

	}

	function setupTranslations( ) {

		//Cache all elements that have corresponding tranlations
		$("body").find("p,h1,h2,h3,span").each( function() {

			var englishTranslation = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( 'en' ).first().text();
			var spanishTranslation = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( 'es' ).first().text();

			if (englishTranslation == '' || spanishTranslation == '' ) return;

			translateElements.push( this );

		});

		//Set up language toggle
    	$( ".language-toggle" ).on( "click", function(){
    		   
    		if ( language == 'en' ) {

    			$("#language-text").html("English");
    			changeLanguage('es');

    		} else if( language == 'es') {

    			$("#language-text").html("Español");

    			changeLanguage('en');

    		}
    		
    	});

	}

	function changeLanguage( languageKey ) {

		language = languageKey;

		$(translateElements).each( function() {

			var translationText = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( language ).first().text();
			$(this).html( translationText );

		});

	}

});

