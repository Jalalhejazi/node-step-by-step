// glæder kun for browsere
if (Meteor.isClient) {


    // første gang en browser starter
    Meteor.startup(function() {
        Router.addRoute('/', 'indexTemplate');
        Router.addRoute('/home', 'homeTemplate');
        Router.addRoute('/about', 'aboutTemplate');
        Router.addRoute('/kurser', 'kurserTemplate');

        Router.run();
    });

};