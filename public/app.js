var config = {
    dataType: 'jsonp',
    data: "data=yeah",
    jsonp: 'success',
    url: '/db?success=onSuccessCallback'

}

var onSuccessCallback = function(data) {
    console.log("onSuccessCallback: data as jsonp ");
    console.dir(data);

    $("#results").html(data.name + data.planet + data.addresss);
}


$('#test').click(function(e) {
    e.preventDefault();
    $.ajax(config);
});