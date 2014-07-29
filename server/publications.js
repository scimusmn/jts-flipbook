/**
 * Components
 *
 * Return all components
 */
Meteor.publish('components', function(options) {
  return Components.find({}, options);
});
