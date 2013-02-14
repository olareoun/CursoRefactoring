describe("HumanMetabolism", function() {

  var metabolism;

  beforeEach(function() {
    metabolism = new HumanMetabolism();
  });

  it("needs calories based in complexion", function() {   
    metabolism.setComplexion(Complexion.SKINNY);    
    expect(metabolism.getDailyCalories()).toEqual(3000);
    
    metabolism.setComplexion(Complexion.MORBID);    
    expect(metabolism.getDailyCalories()).toEqual(500);
    
  });


});

