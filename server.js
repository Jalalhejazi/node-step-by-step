fs = require('fs')

fs.mkdir('./newdir', 0666, function(err) {
    if (err) throw err
    console.log('Created newdir')

    fs.rmdir('./newdir', function(err) {
        if (err) throw err;
        console.log('Removed newdir');
    })
})