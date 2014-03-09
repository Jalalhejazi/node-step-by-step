

var about = {
    "info":"this is the value of info key"
}

exports.getInfo = function(req,res){

    if (req.cookies.beenHereBefore === 'yes') {
        res.send('I can track your cookies. You have been here before')
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This is your first visit to me');
    }
    res.end();
}

