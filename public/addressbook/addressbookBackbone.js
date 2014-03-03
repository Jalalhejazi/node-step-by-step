'use strict';
/*global $: false, Backbone: false */

(function () {
  var emailInput, firstNameInput, lastNameInput, phoneInput;
  var ids;
  var URL_PREFIX = 'http://localhost:3000/addressbook/';

  var Person = Backbone.Model.extend({
    defaults: function () {
      return {
        firstName: null,
        lastName: null,
        email: null,
        phone: null
      };
    }
  });

  // This is a view for a person.
  // To create and render,
  // new FormView({model: person}).render();
  var FormView = Backbone.View.extend({
    el: '#personForm',

    events: {
      'click #add': 'add',
      'click #delete': 'del'
    },

    render: function () {
      var person = this.model;
      firstNameInput.val(person ? person.get('firstName') : '');
      lastNameInput.val(person ? person.get('lastName') : '');
      emailInput.val(person ? person.get('email') : '');
      phoneInput.val(person ? person.get('phone') : '');
      return this;
    },

    add: function () {
      var person = {
        firstName: firstNameInput.val(),
        lastName: lastNameInput.val(),
        email: emailInput.val(),
        phone: phoneInput.val()
      };
      var id = person.lastName + '-' + person.firstName;

      var doneCb = function () {
        ids[id] = true;
        new ListView({collection: ids, value: id}).render();
      };

      $.ajax(URL_PREFIX + id, {
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(person)
      }).done(doneCb).error(errorCb);
    },

    del: function () {
      var id = lastNameInput.val() + '-' + firstNameInput.val();

      var doneCb = function () {
        delete ids[id];
        new ListView({collection: ids}).render();
        new FormView({model: null}).render();
      };

      $.ajax(URL_PREFIX + id, {type: 'DELETE'}).done(doneCb).error(errorCb);
    }
  });

  // This is a view for a collection of ids.
  // To create and render,
  // new ListView({collection: idArray}).render();
  var ListView = Backbone.View.extend({
    el: '#nameList',

    events: {
      'change': 'select' // no selector needed to listen on el
    },

    render: function () {
      var jq = this.$el;
      jq.empty();
      Object.keys(this.collection).sort().forEach(function (id) {
        var name = id.split('-').join(', ');
        jq.append($('<option>', {value: id}).text(name));
      });
      jq.val(this.options.value);
      return this;
    },

    select: function () {
      var processPerson = function (person) {
        var model = new Person(person);
        new FormView({model: model}).render();
      };

      var id = this.$el.val(); // gets value of select
      $.getJSON(URL_PREFIX + id).done(processPerson).fail(errorCb);
    }
  });

  function errorCb(err) {
    alert(err.toString());
    console.log('error:', err);
  }

  function load() {
    var processIds = function (theIds) {
      ids = {}; // using a map instead of an array so ids can be easily deleted
      theIds.forEach(function (id) { ids[id] = true; });
      new ListView({collection: ids}).render();
    };

    $.getJSON(URL_PREFIX + 'list').done(processIds).fail(errorCb);
  }

  $(function () {
    firstNameInput = $('#firstName');
    lastNameInput = $('#lastName');
    emailInput = $('#email');
    phoneInput = $('#phone');

    load();
  });
}());
