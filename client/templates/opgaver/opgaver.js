  Template.opgaverTemplate.title = function() {
      return "fra Database Server til Node (meteor-server) igennem mongodb op til browser"
  };

  Template.opgaverTemplate.opgave = function() {
      return opgaver.find();
  };