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