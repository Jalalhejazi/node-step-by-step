Template.homeTemplate.myName = function() {
    Session.setDefault('myName', 'Jalal Hejazi 2014');
    return Session.get('myName');
};

Template.homeTemplate.title = function() {
    Session.setDefault('title', 'Session.set("title","change my title")');
    return Session.get('title');
};