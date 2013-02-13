function CodeBreakerEM() {

	this.check = function(guessCode, code){
		var guesser = new Guesser(guessCode, code);
		return guesser.check();
	};

}

function Guesser(code, guessCode){
	var PARTIAL_MATCH_SYMBOL = '-';
	var PERFECT_MATCH_SYMBOL = '*';

	this.check = function() {
		var perfectMatches = detectPerfect();
		var partialMatches = detectPartial();

		return partialMatches + perfectMatches;
	};

	var detectPerfect = function(){
		return detect(isPerfect, PERFECT_MATCH_SYMBOL);
	}

	var detectPartial = function(){
		return detect(isPartial, PARTIAL_MATCH_SYMBOL);
	}

	var detect = function(isAMatch, matchSymbol){
		var matches = "";
		for(var index in guessCode) {
			if(isAMatch(index)) {
				matches += matchSymbol;
			}
		}
		return matches;
	}

	var isPerfect = function(index){
		return guessCode[index] === code[index];
	};

	var isPartial = function(index){
		var isPartial = (code.indexOf(guessCode[index]) != -1);
		return isPartial && !isPerfect(index);
	};

}

