var VALID_LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var NO_INDEX = -1;

var MonoPhoneme = {};
MonoPhoneme.pool = {};
MonoPhoneme.for = function(aMonoPhoneme){
	var notValid = (VALID_LETTERS.indexOf(aMonoPhoneme) == NO_INDEX);
	if (notValid) return this.nullMonoPhoneme;
	if (this.pool[aMonoPhoneme]) return this.pool[aMonoPhoneme];

	var letter = {
		toCaps: function() {
			return aMonoPhoneme.toUpperCase();
		},

		toLower: function() {
			return aMonoPhoneme.toLowerCase();
		}
	};
	this.pool[aMonoPhoneme] = letter;
	return letter;
};
MonoPhoneme.nullMonoPhoneme = {
	toCaps: function() {
		return '';
	},
	toLower: function() {
		return '';
	}
};

function MonoPhonemeCrew() {

	this.giveMeAn = function(letter) {
		return MonoPhoneme.for(letter);
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};