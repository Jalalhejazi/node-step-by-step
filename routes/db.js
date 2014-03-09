
var data =  {
        "name": " I'am a human like you ",
        "planet": " from the blue planet. ",
        "addresss": " My address is milky way ",
        "Galaxy": ["Ez101", "zx332", "z0"],
        "universe": "0001"
}


var getData = function(req,res){
    console.log('query: ' + JSON.stringify(req.query));

    console.log('params: ' + JSON.stringify(req.params));
    console.log('body: ' + JSON.stringify(req.body));
    console.log('query: ' + JSON.stringify(req.query));

    res.header('Content-type', 'application/json');
    res.header('Charset', 'utf8');

    res.jsonp(data);
}


exports.data = data ;
exports.getData = getData;