// Hent alle mine kurser hvis ikke jeg har dem i forvejen i mongodb


if (jalal_kurser.find().count() === 0) {
    HTTP.get('http://rest.supermobile.dk/JH_Kurser.json', function(error, success) {

        _.map(success.data.jH_Kurser, function(mineKurser) {

            console.dir(mineKurser);
            jalal_kurser.insert(mineKurser)


        });

    });

};