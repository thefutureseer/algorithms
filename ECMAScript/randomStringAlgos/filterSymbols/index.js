//Take a string and filter all symbols

const filterSymbols=(str)=>{
  //right away return the answer
  //make an array from the string
  //filter the array by matching only the 
  //the alphabet
  //join the array to put the string
  //back together
  return Array.from(str).filter(i=>i.match(/[a-zA-Z\s]/)).join("");

};

filterSymbols("and ther*e wer@@e sym*&^bols");
console.log(filterSymbols("and ther*e wer@@e sym*&^bols"));
module.exports = filterSymbols;