 // send data til kurserTemplate
 Template.kurserTemplate.kurser = function() {
     return kurser.find();
 };