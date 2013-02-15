describe("MonoPhoneme", function(){

  it("creates a new object monoPhoneme if it does not exist", function(){
    var monoPhoneme = MonoPhoneme.get("a");
    expect(monoPhoneme).toBeTruthy();
  });

  it("returns the same monoPhoneme object if it exists", function(){
    var firstMonoPhonemeObject = MonoPhoneme.get("a");
    var secondMonoPhonemeObject = MonoPhoneme.get("a");
    expect(firstMonoPhonemeObject).toBe(secondMonoPhonemeObject);
  });

  it("returns nullMonoPhoneme if not a monoPhoneme", function(){
    var monoPhoneme = MonoPhoneme.get("?");
    expect(monoPhoneme.toCaps()).toBeFalsy();
    expect(monoPhoneme.toLower()).toBeFalsy();
  });
});
