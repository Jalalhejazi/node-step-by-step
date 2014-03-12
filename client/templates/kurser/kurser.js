 // send data til kurserTemplate
 Template.kurserTemplate.kursus = function() {
     return jalal_kurser.find();
 };

 Template.kurserTemplate.antalKurser = function() {
     return jalal_kurser.find().count();
 };