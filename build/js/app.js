(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.number = function() {
  var words = this.body.split(" ");
  return words.length;
}

Journal.prototype.vowels = function() {
  var vowels = this.body.match(/[aeiouAEIOU]/g);
  return vowels.length;
};

Journal.prototype.consonants = function() {
  var consonants = this.body.match(/[^aeiouAEIOU\s\d\W\_]/g);
  return consonants.length;
};

Journal.prototype.getTeaser = function() {
  var words = this.body.split(" ").slice(0,8).join(" ");
  return words;
}

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/main.js').journalModule;


$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal(title, body);
    var wordNumber = newEntry.number();
    var vowelNumber = newEntry.vowels();
    var consonantNumber = newEntry.consonants();
    var finished = newEntry.getTeaser();
    $("#display").show();
    $("#display-title").text(title);
    $("#display-body").text(finished);
    $("#count").text("There are "+ wordNumber + " words in your entry");
    $("#vowelNumber").text("There are "+ vowelNumber + " vowels in your entry");
    $("#consonantNumber").text("There are "+ consonantNumber + " consonants in your entry");

  });
});

},{"./../js/main.js":1}]},{},[2]);
