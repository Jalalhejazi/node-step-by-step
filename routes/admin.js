

exports.signin = function(req,res){

    res.redirect('/signin.html');

}


exports.validate = function (req, res) {

    if(req.body.username === req.body.password){
        req.session.user = {
            isAuthenticated: true,
            username:req.body.username
        };
        req.redirect('/private');

    }else{
        res.redirect('/login');
    }

}


exports.getPrivateSection = function(req,res){

    res.send('Welcome to the private/authenticated section: ' + req.session.user.username);
}