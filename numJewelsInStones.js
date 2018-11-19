const numJewelsInStones = function(J, S) {
  const jewelHash = {};
  let count = 0;

  for (let i = 0; i < J.length; i++) {
    jewelHash[J[i]] = J[i];
  }

  for (let i = 0; i < S.length; i++) {
    if (jewelHash[S[i]] !== undefined) {
      count++;
    }
  }

  return count;
}

numJewelsInStones("aA", "aAAabbbb");
