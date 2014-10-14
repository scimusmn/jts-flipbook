/**
 * screensaver-touch.js
 * Adapted from screensaver.js @ https://github.com/scimusmn/kiosk_video_player/blob/master/src/js/screensaver.js
 * After 3 minutes of inactivity, show a full-screen video as a screensaver.
 */

$(function () {

  // Start the clock
  idleTime = 0;

  // How long is timeout?
  timeoutSeconds = 60;

  // Increment the idle time counter every minute.
  idleInterval = setInterval('timerIncrement()', 1000);// 1 second

  // Zero the idle timer on movement.
  $(this).bind('touchstart keypress mousemove', function(e) {
    idleTime = 0;
  });

});

/**
 * Start the screensaver after 3 minutes of inactivity.
 */
function timerIncrement() {

  idleTime = idleTime + 1;

  // If it's been X seconds of inactivity, save the screen
  if ( idleTime > timeoutSeconds ) {

    var videoPlayer = document.getElementById('screensaver-video');

    // Show the video
    $(videoPlayer).fadeIn('slow');

    // videoPlayer.play();

    //Stop timer
    clearInterval(idleInterval);

    waitForWakeUp(videoPlayer); // Watch for mousemove, or an error, which will reload the page

  }

}

/**
 * Clear screensaver
 */
function waitForWakeUp() {
  // Refresh on mousemove
  $('body').bind('touchstart keypress mousemove', function(e) {
    location.reload();
  });

}
