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
  var words = this.body.split(" ");
  var sentence = words.slice(0,8);
  var finished = sentence.join(" ");
  return finished;
}

exports.journalModule = Journal;
