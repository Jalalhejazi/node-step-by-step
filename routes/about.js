exports.getInfo = function (req, res) {

    if (req.cookies.beenHereBefore === 'yes') {
        res.send('I can track your cookies. You have been here before  <a href="/clear"> Clear the cookie </a>  ')
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This is your first visit to me');
    }

}

exports.clearCookie = function (req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/about');

}


exports.getSession = function (req, res) {
    req.session.name = req.session.name || new Date().toUTCString();
    res.send("<h1>" + req.session.name + "</h1>");

}