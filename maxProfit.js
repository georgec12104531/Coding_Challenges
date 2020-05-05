
// Time Complexity: O(n^2)
// Space Complexity: 0(1) 

var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let currentProfit = prices[j] - prices[i]
            maxProfit = currentProfit > maxProfit ? currentProfit: maxProfit;
        }
    }
    
    return maxProfit;
};

// Time Complexity: O(n);
// Space Complexity: O(1);

const maxProfit = (prices) => {
  let maxProfit = 0;
  let min = prices[0];

  prices.forEach(price => {
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  })

  return maxProfit;
}

maxProfit([7,1,5,3,6,4]);
