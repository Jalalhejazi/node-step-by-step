

var about = {
    "info":"this is the value of info key"
}

exports.getInfo = function(req,res){
    //let the browser know to receive json type
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    // Let the response be a JSON object
    res.end("\n\n" + JSON.stringify(about) + "\n\n")

}

