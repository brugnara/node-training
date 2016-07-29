/**
 * Created by brugnara on 29/07/16,
 * @ daniele@brugnara.me
 */

// const debug = require('debug')('corso:frontend:index');
const validator = require('validator');
const $ = require('jquery');

console.log('start');
console.log(validator('ciao'));
console.log(validator('not ciao!!!!!!'));

$(function() {

  function load() {
    $.ajax('http://localhost:4000/data').done(function(res) {
      console.log(res);
      var html = $('#pippo').html();
      $('#pippo').html(html + '<br>' + res.data.join(', '));
    });
  }

  setInterval(function() {
    load();
  }, 2000);

  load();

});

