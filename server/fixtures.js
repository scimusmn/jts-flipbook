/**
 * Fixture data
 *
 * This sets up the Mongo DB database
 */
var now = new Date().getTime();
dimsum.configure({ flavor: 'jabberwocky' });

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Setup default content
 */
if (Components.find().count() === 0) {

    i = getRandomInt(0, 10);

    var toilet = Components.insert({
        componentNum: '0404',
        title: 'Toilet photos',
        description: 'Astronauts and engineers are learning what it takes for humans to live in space and what they learn from the International Space Station will make future missions further into space possible.',
    });
}

