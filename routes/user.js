exports.userlist = function(db) {
    return function(req, res) {
        db.collection('userlist').find().toArray(function(err, items) {
            res.json(items);
        })
    }
};
exports.adduser = function(db) {
    return function(req, res) {
        db.collection('userlist').insert(req.body, function(err, result) {
            res.send(
                (err === null) ? {
                    msg: result
                } : {
                    msg: 'error: ' + err
                }
            );
        });
    }
};
exports.deleteuser = function(db) {
    return function(req, res) {
        var userToDelete = req.params.id;
        db.collection('userlist').removeById(userToDelete, function(err, result) {
            res.send((result === 1) ? {
                msg: result
            } : {
                msg: 'error: ' + err
            });
        });
    }
};


// Clear all data from userlist
exports.userlistClearAll = function(db) {
    return function(req, res) {
        db.collection('userlist').remove({}, function(err, result) {
            res.send((result === 1) ? {
                msg: result
            } : {
                msg: 'error: ' + err
            });
        });
    }
};