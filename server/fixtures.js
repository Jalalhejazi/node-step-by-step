// **************************************************************//
//              opgaver data fra rest.supermobile.dk/opgaver
// **************************************************************//

// Server-side HTTP.get() hente data fra servicen ved opstart 
// kun første/én gang


if (opgaver.find().count() === 0) {

    HTTP.get('http://rest.supermobile.dk/opgaver/.json', function(error, success) {

        // Der bliver oprettet alle rækker fra servicen til mongodb  
        // underscore.js  _.map() -> svarer til Foreach() loop

        _.map(success.data.opgaver, function(opgaven) {
            console.log("Første gang fixtures.js> HTTP.get from rest.supermobile.dk/opgaver > onSuccess> " + opgaven.todo);

            //sende hele opgaven til mongodb as-is  :-) 
            opgaver.insert(opgaven);

        });

    });
};




// **************************************************************//
//              kurser test data
// **************************************************************//

if (kurser.find().count() === 0) {
    kurser.insert({
        title: 'learn how to code server+client with javaScript',
        author: 'Jalal Hejazi',
        url: 'http://node.supermobile.dk'
    });

    kurser.insert({
        title: 'How to structure your code-base for server and client',
        author: 'Jalal Hejazi',
        url: 'http://jalal.meteor.com/#structuringyourapp'
    });

    kurser.insert({
        title: 'Node.js - Det samlede server web-udviklingsforløb',
        author: 'Jalal Hejazi',
        url: 'http://db.superusers.dk/KursusBeskrivelse/kursusbeskrivelse.aspx?suNr=SU0095'
    });
}