//Take a string and filter all symbols

const filterSymbols=(str)=>{
  //right away return the answer
 return (
  //make an array from the string
 Array.from(str)
 //filter the array by matching only the 
 //the alphabet
 .filter(i=>i.match([/a-zA-Z/]))
 //join the array to put the string
 //back together
 .join("")
)
};
module.exports = filterSymbols;