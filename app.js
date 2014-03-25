 if (Meteor.isClient) {

     Template.test01.data01 = function() {
         return " this is data01 ";
     };
     Template.test02.data02 = function() {
         return " this is data02 ";
     };
     Template.test03.data03 = function() {
         return " this is data03 ";
     };


 };


 if (Meteor.isServer) {
     // all your serverside code goes here  :-) 

 };