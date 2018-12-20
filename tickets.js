function Clerk(name) {
  this.name = name;

  this.money = {
    25: 0,
    50: 0,
    100: 0
  }

  this.sell = (cash) => {
    this.money[cash]++;

    switch(cash) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break
      case 100:
        this.money[50] > 0 ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  }
}

function tickets(peopleinline) {
  const bob = new Clerk("Bob");
  
  return peopleinline.every(bob.sell) ? 'YES' : 'NO'; //fat arrow function binds to this, would throw error otherwise
}
