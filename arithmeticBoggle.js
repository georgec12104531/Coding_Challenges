 function binaryTreeBoggle(magicNumber, numbers, index, sum) {
    if (index === numbers.length) {
       if (numbers.length > 0)
          return (magicNumber === sum);
       else
          return (magicNumber === 0);
    } else {
        let left = binaryTreeBoggle(magicNumber, numbers, index+1, sum+numbers[index]);
        let right = binaryTreeBoggle(magicNumber, numbers, index+1, sum-numbers[index]);
        
        return (left || right);
    }
 }

 
 function arithmeticBoggle(magicNumber, numbers) {
    return binaryTreeBoggle(magicNumber, numbers, 0, 0);
}

console.log(arithmeticBoggle(0, []))
