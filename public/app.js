$('#test').click(function(e) {
    e.preventDefault();
    console.log('select_link clicked');

    $.ajax({
        dataType: 'jsonp',
        data: "data=yeah",
        jsonp: 'callback',
        url: '/db?callback=?',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });


});