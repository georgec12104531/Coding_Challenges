function goodVsEvil(good, evil) {

  let goodWorth = {
    Hobbits: 1,
    Men: 2,
    Elves: 3,
    Dwarves: 3,
    Eagles: 4,
    Wizards: 10
  }

  let evilWorth = {
    Orcs: 1,
    Men: 2,
    Wargs: 2,
    Goblins: 2,
    UrukHai: 3,
    Trolls: 5,
    Wizards: 10,
  }

  const goodPlayers = Object.keys(goodWorth)
  const evilPlayers = Object.keys(evilWorth)

  const goodPlayerCount = good.split(" ")
  const evilPlayerCount = evil.split(" ")

  goodPlayers.forEach((char, idx) => {
    return goodWorth[char] = goodWorth[char] * goodPlayerCount[idx]
  })

  evilPlayers.forEach((char, idx) => {
    evilWorth[char] = evilWorth[char] * evilPlayerCount[idx]
  })

  const goodPoints = Object.values(goodWorth).reduce((sum, points) => sum + points)
  const evilPoints = Object.values(evilWorth).reduce((sum, points) => sum + points)

  if (goodPoints > evilPoints) {
    return 'Battle Result: Good triumphs over Evil, Good should win' 
  } else if (goodPoints < evilPoints) {
    return 'Battle Result: Evil eradicates all trace of Good, Evil should win'
  } else {
    return 'Battle Result: No victor on this battle field, Should be a tie'
  }
}


