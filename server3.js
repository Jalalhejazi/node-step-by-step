var portfinder = require('portfinder');

  portfinder.getPort(function (err, port) {
    //
    // `port` is guarenteed to be a free port 
    // in this scope.
    //
    // By default portfinder will start searching from 8000. 
    // To change this simply set portfinder.basePort.


	console.log( "This port is free to use:  %s" , port);

  });