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
