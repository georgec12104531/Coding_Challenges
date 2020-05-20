const generateParenthesis = (n) => {
  let result = [];

  const generateCombo = (leftCount, rightCount, str) => {
    if (leftCount > rightCount) return;
    if (leftCount === 0 && rightCount === 0) result.push(str);

    if (leftCount > 0) generateCombo(leftCount - 1, rightCount, str + '(')
    if (rightCount > 0) generateCombo(leftCount, rightCount - 1, str + ')') ;
  }

  generateCombo(n, n, '');
  return result;
}

// -------------------

const genParenthesis = (n) => {
  let result = [];
  backTrack('', n, n, result);
  return result;
}

const backTrack = (str, left, right, result) => {
  if (right < left || left < 0 || right < 0) return;
  if (left === 0 && right === 0) {
	result.push(str);
  }

  backTrack(str + '(', left - 1, right, result);
  backTrack(str + ')', left, right - 1, result);
} 
