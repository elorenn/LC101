// 14.5. TDD in Action:
// 14.5.1. Requirements:

const processor = require('../processor.js');

describe("transmission processor", function() {

  //Take in a transmission string and return an object
  it("takes a string and returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toEqual("object");
  });

  //Return -1 if the transmission does NOT contain "::"
  it("Return -1 if the transmission does NOT contain ::", function() {
    let result = processor("9701:<489584872710>");
    expect(result).toEqual(-1);
  });

  //Returned object should contain an id property. The value of id is the part of the transmission before the "::"
  it('returns id in object', function () {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toEqual(undefined);    
  });

  //The id property should be of type Number
   it('id property should be of type Number', function () {
    let result = processor("9701::<489584872710>");
    // expect(result.id).toEqual(9701);
    expect(typeof result.id).toEqual('number');
  });

  //Returned object should contain a rawData property. The value of rawData is the part of the transmission after the "::"
  it('returns rawData in object', function(){
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toEqual(undefined);
  });
  
  //Return -1 for the value rawData if the rawData part of the transmission does NOT start with < and end with > :

  //It could be missing < at the beginning
  it('returns -1 for rawData if missing < at position 0', function(){
    let result = processor("9701::489584872710>");
    expect(result.rawData).toEqual(-1);
  });

  //It could be missing > at the end
  it('returns -1 for rawData if missing > at last index', function(){
    let result = processor("9701::<489584872710");
    expect(result.rawData).toEqual(-1);
  });

  //It could be missing both < and >
  it('returns -1 for rawData if missing both < and > at beginning and end, respectively', function(){
    let result = processor("9701::489584872710");
    expect(result.rawData).toEqual(-1);
  });

  //Has < but the symbol is in the wrong place
  it('returns -1 for rawData if contains < anywhere but index 0', function(){
    let result = processor("9701::4872<97403495720912");
    expect(result.rawData).toEqual(-1);
  });

  //Has > but the symbol is in the wrong place
  it('returns -1 for rawData if contains > anywhere but last index', function(){
    let result = processor("9701::487297403495>720912");
    expect(result.rawData).toEqual(-1);
  });  

  // Has an extra < /in the wrong place
  it('returns -1 for rawData if contains extra <', function(){
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toEqual(-1);
  });

  // Has an extra > /in the wrong place
  it('returns -1 for rawData if contains extra >', function(){
    let result = processor("9701::<48729>7403495720912>");
    expect(result.rawData).toEqual(-1);
  });

  // there should be no leading whitespace from transmission
  it('there should be no leading whitespace from transmission', function(){
    let result = processor("  9701::<487297403495720912>");
    expect(result.id).toEqual(9701);
  });

  // there should be no trailing whitespace from transmission
  it('there should be no trailing whitespace from transmission', function(){
    let result = processor("9701::<487297403495720912>  ");
    expect(result.rawData).toEqual(487297403495720912);
  });  
  
  // there should be no leading whitespace in rawData
  it('there should be no leading whitespace in rawData', function(){
    let result = processor("9701::  <487297403495720912>");
    expect(result.rawData).toEqual(487297403495720912);
  });  

  // there should be no leading or trailing whitespace from transmission
  it('there should be no leading or trailing whitespace from transmission', function(){
    let result = processor("  9701::<487297403495720912>  ");
    expect(result.rawData).toEqual(487297403495720912);
  });  

  //Return -1 if the id part of the transmission cannot be converted to a number.
  it('id should be able to convert to number', function () {
    let result = processor("9b01::<489584872710>");
    expect(result.id).toEqual(-1);
  });

  // Return -1 if more than one "::" is found in transmission.
  it('there should be no more than one :: in transmission', function(){
    let result = processor("9701::<48::9584872710>");
    expect(result).toEqual(-1);
  });

  it('there should be no more than one :: in transmission', function(){
    let result = processor("97::01::<489584872710>");
    expect(result).toEqual(-1);
  });

  it('there should be no extra : in transmission', function(){
    let result = processor("9701:::<489584872710>");
    expect(result).toEqual(-1);
  });

  //Do not include the < > symbols in the value assigned to rawData
  it('the < > symbols should not be included in the value assigned to rawData', function(){
    let result = processor("9701::<489584872710>");
    expect(result.rawData).toEqual(489584872710);
  });

  //Return -1 for the value of rawData if anything besides numbers are present between the < > symbols.
  it('only numbers should be present between < and > in rawData', function(){
    let result = processor("9701::<48958#4872710>");
    expect(result.rawData).toEqual(-1);
  });

  //The rawData property should be of type Number
   it('rawData property should be of type Number', function () {
    let result = processor("9701::<489584872710>");
    expect(typeof result.rawData).toEqual('number');
  });

}); 