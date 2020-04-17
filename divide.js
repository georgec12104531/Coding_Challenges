// Edgecases: 

// Plan:
// - check to see if divisor is negative
// - create sum variable 
// - create multiplier
// - create while (sum < dividend)
//   - sum += divisor; 
// - if negative, return negative multiplier

var divide = function(dividend, divisor) {
     if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let isNegative;

    if (dividend < 0 && divisor < 0) {
      isNegative = false
    } else if (dividend < 0 || divisor < 0) {
      isNegative = true;
    } else { 
      isNegative = false;
    }
  
    let sum = 0;
    let multiplier = 0;
    let posDividend = Math.abs(dividend);
    
    while (sum <= posDividend) {
      sum += Math.abs(divisor);
      if (sum <= posDividend) {
        multiplier++;
      }  
    }

    return isNegative ? -(multiplier) : multiplier;
};

divide(-1, -1);
