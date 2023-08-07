const filterSymbols = require("./index");

describe("filterSymbol is a function to remove symbols", ()=>{
  //test if filterSymbols is a function
  it("is a function", ()=>{
    const func = typeof filterSymbols;
    console.log(func, "this is func")
    const expectedOutPut = "function";
    expect(func).toBe(expectedOutPut);
  });
});