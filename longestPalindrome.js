
const createStr = (str, start, end) => {
    let currentStr = '';
    
    for(let i = start; i <= end; i++) {
        currentStr = currentStr.concat(str[i]);   
    }    
    
    return currentStr;
}
    
const isPalindrome = (str) => {
    let reverseStr = '';
    
    for (let j = str.length - 1; j >= 0; j--) {
        reverseStr = reverseStr.concat(str[j])
    }
    
    return str === reverseStr; 
}

var longestPalindrome = function(s) {
    const subStrArr = [];
    let longestPal = '';
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j ++) {
            const currentStr = createStr(s, i, j);
            
            if (isPalindrome(currentStr) && currentStr.length > longestPal.length) {
                longestPal = currentStr
            }
        }
    }
    
    return longestPal;
};


longestPalindrome('cbbd')
