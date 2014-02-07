/**
 * screensaver.js
 * After 3 minutes of inactivity, show a full-screen video as a screensaver.
 * See http://stackoverflow.com/a/4029518
 */

$(function () {

  // Start the clock
  idleTime = 0;

  // Increment the idle time counter every minute.
  var idleInterval = setInterval('timerIncrement()', 60000); // 1 minute

  // Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    idleTime = 0;
  });
  $(this).keypress(function (e) {
    idleTime = 0;
  });

});

/**
 * Start the screensaver after 3 minutes of inactivity.
 */
function timerIncrement() {
  idleTime = idleTime + 1;
  var videoPlayer = _V_('videoPlayer'),
      playing = !videoPlayer.paused();

  // If it's been 3 minutes of inactivity, and a video's not playing, save the screen
  if ((idleTime > 2) && (!playing)) {

    // Set a variable for the screensaver
    var screensaver = $('video').attr('data-screensaver');

    // Add the "loop" attribute
    $('video').prop('loop', true);

    // Fade out content
    $('#video-options, h1, h2').fadeOut('fast');

    // Show the video
    $('.hidden').not('#back').show().addClass('screensaver');

    // Change the source, change the size, start playback
    videoPlayer.src(screensaver).size(1366, 768).play();
    console.log('SCREENSAVERED!');

    wakeUp(videoPlayer); // Watch for mousemove, or an error, which will reload the page

  }
}

/**
 * Clear screensaver
 */
function wakeUp(videoPlayer) {
  // Refresh on mousemove
  $('body').mousemove(function (e) {
    location.reload();
  });
  // Refresh on error
  videoPlayer.addEvent('error', function(){
    location.reload();
  });
}
