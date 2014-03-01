node-step-by-step
=================

building nodejs step by step (building chat server and later client )


## Step10 (FileSystem IO)

The file system functions consist of file I/O and directory I/O functions. 

All of the file system functions offer both 
synchronous (blocking) and asynchronous (non-blocking) versions. 

The difference between these two is that the synchronous functions (which have “Sync” in their name) return the value directly and prevent Node from executing any code while the I/O operation is being performed:


    var fs = require('fs');
    var data = fs.readFileSync('./index.html', 'utf8');
    // wait for the result, then use it
    console.log(data);


Asynchronous functions return the value as a parameter to a callback given to them:

    var fs = require('fs');
    fs.readFile('./index.html', 'utf8', function(err, data) {
      // the data is passed to the callback in the second argument
      console.log(data);
    });


You should use the asynchronous version in most cases, but in rare cases (e.g. reading configuration files when starting a server) the synchronous version is more appropriate. 
Note that the asynchronous versions require a bit more thought, since the operations are started immediately and may finish in any order:

    fs.readFile('./file.html', function (err, data) {
      // ...
    });
    fs.readFile('./other.html', function (err, data) {
      // ..
    });

These file reads might complete in any order depending on how long it takes to read each file. The simplest solution is to chain the callbacks:

    fs.readFile('./file.html', function (err, data) {
       // ...
       fs.readFile('./other.html', function (err, data) {
          // ...
       });
    });


Recipe: Reading a file (fully buffered)

    fs.readFile('./index.html', 'utf8', function(err, data) {
      // the data is passed to the callback in the second argument
      console.log(data);
    });

Recipe: Writing a file (fully buffered)

    fs.writeFile('./results.txt', 'Hello World', function(err) {
      if(err) throw err;
      console.log('File write completed');
    });


Recipe: Reading a directory

Reading a directory returns the names of the items (files, directories and others) in it.

    var path = './data/';
    fs.readdir(path, function (err, files) {
      if(err) throw err;
      files.forEach(function(file) {
        console.log(path+file);
        fs.stat(path+file, function(err, stats) {
          console.log(stats);
        });
      });
    });

Recipe: Creating and deleting a directory

    fs.mkdir('./newdir', 0666, function(err) {
      if(err) throw err;
      console.log('Created newdir');
      fs.rmdir('./newdir', function(err) {
        if(err) throw err;
        console.log('Removed newdir');
      });
    });


Recipe: Reading a file and writing to another file

    var file = fs.createReadStream('./data/results.txt', {flags: 'r'} );
    var out = fs.createWriteStream('./data/results2.txt', {flags: 'w'});
    file.on('data', function(data) {
      console.log('data', data);
      out.write(data);
    });
    file.on('end', function() {
      console.log('end');
      out.end(function() {
        console.log('Finished writing to file');
        test.done();
      });
    });


Recipe: Appending to a file

    var file = fs.createWriteStream('./data/results.txt', {flags: 'a'} );
    file.write('HELLO!\n');
    file.end(function() {
      test.done();
    });


Example: searching for a file in a directory, traversing recursively

In this example, we will search for a file recursively starting from a given path. The function takes three arguments: a path to search, the name of the file we are looking for, and a callback which is called when the file is found.

Here is the naive version: a bunch of nested callbacks, no thought needed:

    var fs = require('fs');

    function findFile(path, searchFile, callback) {
      fs.readdir(path, function (err, files) {
        if(err) { return callback(err); }
        files.forEach(function(file) {
          fs.stat(path+'/'+file, function() {
            if(err) { return callback(err); }
            if(stats.isFile() && file == searchFile) {
              callback(undefined, path+'/'+file);
              }
            } else if(stats.isDirectory()) {
              findFile(path+'/'+file, searchFile, callback);
            }
          });
        });
      });
    }
    findFile('./test', 'needle.txt', function(err, path) {
      if(err) { throw err; }
      console.log('Found file at: '+path);
    });

Splitting the function into smaller functions makes it somewhat easier to understand:

    var fs = require('fs');

    function findFile(path, searchFile, callback) {
      // check for a match, given a stat
      function isMatch(err, stats) {
        if(err) { return callback(err); }
        if(stats.isFile() && file == searchFile) {
          callback(undefined, path+'/'+file);
        } else if(stats.isDirectory()) {
          statDirectory(path+'/'+file);
        }
      }
      // launch the search
      statDirectory(path, isMatch);
    }

    // Read and stat a directory
    function statDirectory(path, callback) {
      fs.readdir(path, function (err, files) {
        if(err) { return callback(err); }
        files.forEach(function(file) {
          fs.stat(path+'/'+file, callback);
        });
      });
    }

    findFile('./test', 'needle.txt', function(err, path) {
      if(err) { throw err; }
      console.log('Found file at: '+path);
    });


### Using a specialized module: async.js

This is a FS-specific library that encapsulates file system operations behind a chainable interface. The findFile() function can be written using async.js like this:

    var async = require('asyncjs');
    function findFile(path, searchFile, callback) {
      async.readdir(path)
        .stat()
        .filter(function(file) {
          return file.stat == searchFile;
        })
        .toString(callback);
    }



However, even with file I/O, it is possible to come up with solutions that abstract away the details from your main code. In some cases you can find domain specific libraries that provide very conscise ways of expressing your logic (e.g. async.js) - and in other cases you can at least take parts of the process, and move those into a separate module.






