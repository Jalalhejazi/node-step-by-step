'use strict';
/*global $: false, io: false */

(function () {
  var emailInput, firstNameInput, lastNameInput, phoneInput;
  var deleteBtn, nameList;
  var URL_PREFIX = 'http://localhost:3000/addressbook/';

  function add() {
    var id = getId();

    var doneCb = function () {
      insertId(id);
      nameList.val(getName(id));
    };

    $.ajax(URL_PREFIX + id, {
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(makePerson())
    }).done(doneCb).error(errorCb);
  }

  function addId(id) {
    nameList.append($('<option>', {id: id, value: id}).text(getName(id)));
  }

  function clear() {
    firstNameInput.val('');
    lastNameInput.val('');
    emailInput.val('');
    phoneInput.val('');
  }
  
  function del() {
    var doneCb = function () {
      $('#' + id).remove(); // deletes corresponding option
      clear();
      deleteBtn[0].disabled = true;
    };

    var id = getId();
    $.ajax(URL_PREFIX + id, {type: 'DELETE'}).done(doneCb).error(errorCb);
  }

  function errorCb(err) {
    alert(err.toString());
    console.log('error:', err);
  }

  function getId() {
    return lastNameInput.val() + '-' + firstNameInput.val();
  }

  function getName(id) {
    return id.split('-').join(', ');
  }

  function insertId(id) {
    var option = $('<option>', {id: id, value: id}).text(getName(id));

    var added = false;
    nameList.children().each(function (index, op) {
      if (added) return;
      if (id === op.id) {
        added = true; // already exists
      } else if (id < op.id) {
        option.insertBefore(op);
        added = true;
      }
    });

    if (!added) nameList.append(option);
  }

  function load() {
    var doneCb = function (ids) {
      ids.sort().forEach(addId);
    };

    $.getJSON(URL_PREFIX + 'list').done(doneCb).fail(errorCb);
  }

  function makePerson() {
    return {
      firstName: firstNameInput.val(),
      lastName: lastNameInput.val(),
      email: emailInput.val(),
      phone: phoneInput.val()
    };
  }

  function select(event) {
    var id = nameList.val();

    var doneCb = function (person) {
      firstNameInput.val(person.firstName);
      lastNameInput.val(person.lastName);
      emailInput.val(person.email);
      phoneInput.val(person.phone);
      deleteBtn[0].disabled = false;
    };

    $.getJSON(URL_PREFIX + id).done(doneCb).fail(errorCb);
  }

  function setupWebSocket() {
    var ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = function (event) {
      console.log('got WebSocket message "' + event.data + '"');

      var obj = JSON.parse(event.data);
      console.log('received', JSON.stringify(obj));
      if (obj.event === 'put') {
        insertId(obj.id);
      } else if (obj.event === 'delete') {
        $('#' + obj.id).remove();
      } else {
        console.error('received unrecognized message "' + event.data + '"');
      }
    };
  }

  $(function () {
    firstNameInput = $('#firstName');
    lastNameInput = $('#lastName');
    emailInput = $('#email');
    phoneInput = $('#phone');
    nameList = $('#nameList');
    deleteBtn = $('#delete');

    setupWebSocket();
    load();

    $('#add').click(add);
    deleteBtn[0].disabled = true;
    deleteBtn.click(del);
    nameList.change(select);
  });
}());
