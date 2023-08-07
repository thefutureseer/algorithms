const filterSymbols = require("./index");

describe("filterSymbol is a function to remove symbols", ()=>{
  //test if filterSymbols is a function
  it("is a function", ()=>{
    const func = typeof filterSymbols;
    console.log(func, "this is func")
    const expectedOutPut = "function";
    expect(func).toBe(expectedOutPut);
  });

  it("removes symbols from string", ()=>{
    const stringWSyms = "and ther*e wer@@e sym*&^bols"
    const outPut = "and there were symbols";
    const filterIt = filterSymbols(stringWSyms);
    console.log(filterIt, " after filter")
    expect(filterIt).toBe(outPut);
  })
});