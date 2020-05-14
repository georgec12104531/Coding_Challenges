var defangIPaddr = function(address) {
  let defangedIP = '';

  for (let i = 0; i < address.length; i++) {
    let currentEl = address[i];
    
    if (currentEl === '.') {
      defangedIP += '[.]';
    } else {
      defangedIP += currentEl;
    }
  }
    
  return defangedIP;
};

defangIPaddr("255.100.50.0")
