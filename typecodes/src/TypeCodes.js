function HumanMetabolism() {

	this.complexion;

	this.getDailyCalories = function() {
		return this.complexion.getDailyCalories();
	};

	this.setComplexion = function(aComplexion) {
		this.complexion = aComplexion;
	};
	this.moreMagic = function() {};
	this.needsMoreFood = function() {};

};

var Complexion = {};
Complexion.FATTY = new ComplexionLevel(1000);
Complexion.SKINNY = new ComplexionLevel(3000);
Complexion.ATHLETIC = new ComplexionLevel(2000);
Complexion.MORBID = new ComplexionLevel(500);

function ComplexionLevel(aDailyCalories){
	return {
		getDailyCalories: function(){
			return aDailyCalories;
		}
	}
};