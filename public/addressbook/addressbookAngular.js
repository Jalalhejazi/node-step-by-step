/*global $: false, angular: false */

(function () {
  'use strict';

  var URL_PREFIX = 'http://localhost:3000/addressbook/';
  var model = {
    names: {}, // keys are person ids and values are names
    selectedValue: null // will be set to a person id
  };

  function getIdFromPerson(person) {
    return person.lastName + '-' + person.firstName;
  }

  function getNameFromId(id) {
    return id.split('-').join(', ');
  }

  //--------------------------------------------------------------------------

  var app = angular.module('AddressBook', []);

  //--------------------------------------------------------------------------

  // Also consider using $resource.
  // See http://docs.angularjs.org/api/ngResource.$resource.
  app.factory('restService', function ($http) {
    var svc = {};

    var errorCb = function (data, status) {
      var msg = 'error status = ' + status;
      alert(msg);
      console.error(msg);
    };

    // Deletes a person with a given id.
    svc.del = function (id, cb) {
      $http({method: 'DELETE', url: URL_PREFIX + id})
        .success(cb).error(errorCb);
    };

    // Retrieves a person with a given id.
    svc.get = function (id, cb) {
      $http({method: 'GET', url: URL_PREFIX + id})
        .success(cb).error(errorCb);
    };

    // Gets an array of ids for all people in address book.
    svc.list = function (cb) {
      $http({method: 'GET', url: URL_PREFIX + 'list'})
        .success(cb).error(errorCb);
    };

    // Creates or updates a person.
    svc.put = function (person, cb) {
      delete person._id; // removes MongoDB id from person object
      var id = getIdFromPerson(person);
      $http({method: 'PUT', url: URL_PREFIX + id, data: person})
        .success(cb).error(errorCb);
    };

    return svc;
  });

  //--------------------------------------------------------------------------

  app.controller('ListCtrl', function ($scope, restService) {
    $scope.model = model;

    restService.list(function (ids) {
      ids.forEach(function (id) {
        model.names[id] = getNameFromId(id);
      });

      // If the current value of the select is not set,
      // an empty option will be created.
      var firstId = ids[0];
      model.selectedValue = firstId;
    });
  });

  //--------------------------------------------------------------------------

  app.controller('PersonCtrl', function ($scope, restService) {
    $scope.model = model;

    $scope.emailRegex = /^[\w.]+@\w+\.[a-z]{2,3}$/;

    $scope.$watch('model.selectedValue', function (id) {
      if (id) {
        restService.get(id, function (person) {
          $scope.person = person;
        });
      }
    });

    $scope.del = function () {
      var id = getIdFromPerson($scope.person);
      restService.del(id, function () {
        delete model.names[id];
        // Select the first option that is not the one being deleted.
        $scope.model.selectedValue =
          $('#nameList > option[value!="' + id + '"]').attr('value');
      });
    };

    $scope.put = function () {
      var person = $scope.person;
      restService.put(person, function () {
        var id = getIdFromPerson(person);
        model.names[id] = getNameFromId(id);
        model.selectedValue = id;
      });
    };
  });
}());
