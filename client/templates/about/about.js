// her kan du oprette template til about siden
Template.aboutTemplate.title = function() {

    return "About Page ..."

};
Template.aboutTemplate.opgave = function() {

    var resource = 'opgave';

    jQuery.ajax({
        url: 'http://rest.supermobile.dk/opgaver.json',
        type: 'GET',
        dataType: 'jsonp',
        success: function(data, textStatus, xhr) {
            Session.set(resource, data.opgaver);
        },
        error: function(xhr, textStatus, errorThrown) {
            Session.set(resource, errorThrown);
        }
    });

    return Session.get(resource);
};