function latinify(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(word[0])) return `${word}ay`;

  let idx = 1
  while (!vowels.includes(word[idx])) idx += 1;

  if (word[idx - 1] === "q") idx -= 1

  return `${word.slice(idx)}${word.slice(0, idx)}ay`
}


function pigLatinify(sentence) {
  let sentence_split = sentence.split(" ");
  let final_sentence = sentence_split.map((word) => { return latinify(word); })
  return final_sentence.join(" ");
}
