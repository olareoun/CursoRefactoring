function CodeBreakerEM() {

	this.check = function(guessCode, code){
		var matcher = new Matcher(guessCode, code);
		var formatter = new Formatter();

		var matches = matcher.check();

		return formatter.stringfy(matches);
	};

}

function Matcher(code, guessCode){
	var matches = new Matches();

	this.check = function() {
		detectPerfect();
		detectPartial();

		return matches;
	};

	var detectPerfect = function(){
		return detect(isPerfect, matches.incPerfect);
	};

	var detectPartial = function(){
		return detect(isPartial, matches.incPartial);
	};

	var detect = function(isAMatch, inc){
		for(var index in guessCode) {
			if(isAMatch(index)) {
				inc();
			}
		}
	};

	var isPerfect = function(index){
		return guessCode[index] === code[index];
	};

	var isPartial = function(index){
		var isPartial = (code.indexOf(guessCode[index]) != -1);
		return isPartial && !isPerfect(index);
	};

}

function Matches(){
	var perfect = 0;
	var partial = 0;

	this.incPerfect = function(){
		perfect++;
	};

	this.incPartial = function(){
		partial++;
	};

	this.getPerfect = function(){
		return perfect;
	};

	this.getPartial = function(){
		return partial;
	};
}

function Formatter(){

	var PARTIAL_MATCH_SYMBOL = '-';
	var PERFECT_MATCH_SYMBOL = '*';

	this.stringfy = function(matches){
		return format(matches.getPartial(), PARTIAL_MATCH_SYMBOL) + format(matches.getPerfect(), PERFECT_MATCH_SYMBOL);
	};

	var format = function(count, symbol){
		var output = '';
		while (count > 0){
			output += symbol;
			count--;
		}
		return output;
	};

}

