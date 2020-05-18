const productExceptSelf = (arr) => {
  let result = [];
  let productLeft = 1;
  let productRight = 1;


  // Creates a new array with products of everything to the left of each element
  for(let i = 0; i < arr.length; i++) {
    result[i] = productLeft;
    productLeft *= arr[i]
  }
 
  // Loop through the array in reverse and to returns the new product of everything to the right of the element
  for(let j = arr.length - 1; j >= 0; j--) {
    result[j] *= productRight;
    productRight *= arr[j];
  }

  return result;
}

productExceptSelf([1, 2, 3, 4])
