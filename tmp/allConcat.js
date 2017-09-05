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
