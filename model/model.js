// mappen model kan ses af både client og server :-) 
// kurser er defineret uden var, med formålet at være global object
// kurser object kan ses af både browseren og serveren. 


kurser = new Meteor.Collection('kurser');

// opgaver-data stammer fra //rest.supermobile.dk/opgaver.json
// vi ønsker at gemme data fra remote service til local mongodb
opgaver = new Meteor.Collection('opgaver');


//alle kurser for instuktøren Jalal siden 2006 til længere i fremtiden
//rest.supermobile.dk/JH_Kurser.json
jalal_kurser = new Meteor.Collection('jalal_kurser');