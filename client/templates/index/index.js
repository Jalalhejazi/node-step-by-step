Template.indexTemplate.myName = function() {
    Session.setDefault('myName', 'Jalal Hejazi 2014');
    return Session.get('myName');
};

Template.indexTemplate.title = function() {
    Session.setDefault('title', 'Session.set("title","change my title")');
    return Session.get('title');
};