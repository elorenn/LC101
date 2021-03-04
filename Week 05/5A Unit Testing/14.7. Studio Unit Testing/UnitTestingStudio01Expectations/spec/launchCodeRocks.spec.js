const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  it('should return "Launch!" when passed a number that is only divisible by 2', function(){
    let output = launchOutput(2);
    expect(output).toEqual('Launch!');
  });

  it('should return "Code!" when passed a number that is only divisible by 3', function(){
    let output = launchOutput(3);
    expect(output).toEqual('Code!');
  });

  it('should return "Rocks!" when passed a number that is only divisible by 5', function(){
    let output = launchOutput(5);
    expect(output).toEqual('Rocks!');
  });

  it('should return "LaunchCode!" when passed a number that is divisible by 2 AND 3', function(){
    let output = launchOutput(6);
    expect(output).toEqual('LaunchCode!');
  });

  it('should return "Code Rocks!" when passed a number that is divisible by 3 AND 5', function(){
    let output = launchOutput(15);
    expect(output).toEqual('Code Rocks!');
  });

  it('should return "Launch Rocks! (CRASH!!!!)" when passed a number that is divisible by 2 AND 5', function(){
    let output = launchOutput(10);
    expect(output).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  it('should return "LaunchCode Rocks!" when passed a number that is divisible by 2, 3, AND 5', function(){
    let output = launchOutput(30);
    expect(output).toEqual('LaunchCode Rocks!');
  });

  it(`should return "Rutabagas! That doesn't work." when passed a number that is NOT divisible by 2, 3, OR 5`, function(){
    let output = launchOutput(7);
    expect(output).toEqual(`Rutabagas! That doesn't work.`);
  });
});

