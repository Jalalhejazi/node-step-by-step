// glæder kun for browsere
if (Meteor.isClient) {


    // første gang en browser starter
    Meteor.startup(function() {

        Router.addRoute('/opgaver', 'opgaverTemplate');
        Router.addRoute('/kurser', 'kurserTemplate');

        Router.run();
    });

};