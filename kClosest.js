const distance = (coord) => {
  return Math.sqrt(Math.pow((coord[0] - 0), 2) + Math.pow((coord[1] - 0), 2))
}

const kClosest = (points, k) => {
  const sorted = points.sort((a, b) => distance(a) - distance(b))
  return sorted.slice(0, k)
}
