function even(num) {
  let str = ""
  for (i=0; i <= num; i++) {
    if (i % 2 === 0) {
      str += " "
    } else {
      str += "#"
    }
  }
  return str
}

function odd(num) {
  let str = ""
  for (i=0; i < num; i++) {
    if (i % 2 === 0) {
      str += "#"
    } else {
      str += " "
    }
  }
  return str
}


function chess(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      console.log(even(num));
    } else {
      console.log(odd(num));
    }
  }
}

chess(12);
