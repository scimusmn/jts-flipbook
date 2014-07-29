/**
 * Iron Router Common templates
 */
Router.configure({

    /**
     * Primary layout template
     */
    layoutTemplate: 'layout',

    /**
     * Page not found template
     *
     * TODO create this template with a link home
     * notFoundTemplate: 'notFound',
     */

    /**
     * Loading template
     *
     * Displays while waitOn calls are waiting
     */
    //loadingTemplate: 'loading',

});

/**
 * Build a controller for showing components
 */
ComponentsListController = RouteController.extend({
    template: 'componentsList',
    increment: 10,
    limit: function() {
        return parseInt(this.params.componentsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.limit()};
    },
    waitOn: function() {
        return Meteor.subscribe('components', this.findOptions());
    },
    components: function() {
        return Components.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.components().count() === this.limit();
        return {
            components: this.components(),
        };
    }
});

/**
 * Collect the components
 */
NewComponentsListController = ComponentsListController.extend({
    sort: {_id: -1},
});

/**
 * Map URLs to templates
 */
Router.map(function() {

    this.route('home', {
        path: '/',
        controller: NewComponentsListController
    });

});
