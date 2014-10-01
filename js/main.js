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

	function initialize(xml) {

		configXML = xml;

		//Build slides
		$(configXML).find("slides slide").each( function(){

			var newSlide = $( ".slides .slide" ).first().clone().appendTo( $( ".swipeshow .slides" ).first() );

			$( newSlide ).attr( 'id', $(this).attr('id') );
			$( newSlide ).find('img').first().attr('src', $(this).attr('img') );
			$( newSlide ).addClass( $(this).attr('class') );

		});

		//Remove initial template slide
		$( ".slides .slide" ).first().remove();

		//Set up language toggle
    	$( ".language-toggle" ).on( "click", function(){
    		   
    		if ( language == 'en' ) {

    			$("#language_toggle h3").html("English");
    			changeLanguage('es');

    		} else if( language == 'es') {

    			$("#language_toggle h3").html("Español");
    			changeLanguage('en');

    		}
    		
    	});

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

	        onactivate: function(){},
	        onpause: function(){},

	      });

	}

	function changeLanguage( languageKey ) {

		language = languageKey;

		console.log("changeLanguage: ",language);

		//Find all swappable language
		$("body").find("p,h1,h2,h3,span").each( function(){
			
			//Get translation for slide
			var translationText = $( configXML ).find('slide[id="'+ $(this).parents(".slide").first().attr('id') +'"] text[id="'+ $(this).attr('id') +'"]').children( language ).first().text();
				
			//Apply to html
			if (translationText != '') $(this).html( translationText );

		});

	}

});

