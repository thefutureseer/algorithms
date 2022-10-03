// Sample Programming Interview Question
// "Writing programming interview questions hasn’t made me rich yet ... 
//so I might give up and start trading Apple stocks all day instead.
//
// First, I wanna know how much money I could have made yesterday if I’d been trading Apple stocks all day.
//So I grabbed Apple’s stock prices from yesterday and put them in an array called stockPrices, where:
//
// The *indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the *price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
//
// Write an efficient function that takes stockPrices and returns 
//the best profit I could have made from one purchase and 
//one sale of one share of Apple stock yesterday.
//
//   For example:

//const stockPrices = [10, 7, 5, 8, 11, 9];

// Returns 6 (buying for $5 and selling for $11)
// function getMaxProfit(stockPrices){
//   var maxProfit = 0;
//   for (var i =  0; i < stockPrices.length; i++ ){
//
//     for (var j = 1; j < stockPrices.length; j++) {
//       var currentProfit = stockPrices[j] - stockPrices[i];
//     //  console.log('this is i', stockPrices[i]);
//     //  console.log('this is j', stockPrices[j]);
//   //    console.log("current profit", currentProfit);
//       if (currentProfit > maxProfit) {
//         maxProfit = currentProfit;
//       }
//
//     }
//   }
//   return maxProfit;
// }

const stockPrices = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPrices) {
  if(stockPrices.length < 2) {
    throw 'Need more than 2 prices to get profit';
  }
  var minPrice = stockPrices[0];
  var maxProfit = stockPrices[1] - stockPrices[0];

  for(let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(potentialProfit, maxProfit);

    minPrice = Math.min(currentPrice, minPrice);
  }
  //return maxProfit;
  return minPrice;
}

console.log(getMaxProfit(stockPrices));

// // Returns 6 (buying for $5 and selling for $11)
 module.exports = getMaxProfit;