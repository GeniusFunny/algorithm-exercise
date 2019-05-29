/*
1．	0/1 Knapsack Problem. There are 5 items that have a value and weight list below, the knapsack can contain at most 100 Lbs. Solve the problem using back-tracking algorithm and try to draw the tree generated.
*/

function backTrackingKnapack(knapack, size) {
  const len = knapack.length
  let currentWeight = 0
  let currentValue = 0
  let bestValue = 0
  let path = []

  function getBest(i) {
    if (i >= len) {
      if (currentValue > bestValue)
        bestValue = currentValue
      return
    }

    if (currentWeight + knapack[i].weight <= size) {
      path[i] = 1
      currentWeight += knapack[i].weight
      currentValue += knapack[i].value
      getBest(i+1)
      // back-tracking
      currentWeight -= knapack[i].weight
      currentValue -= knapack[i].value
    }
    path[i] = 0
    getBest(i+1)
  }
  getBest(0)
  return bestValue
}

const knapack = [
  {
    value: 1,
    weight: 1
  },
  {
    value: 6,
    weight: 2
  },
  {
    value: 18,
    weight: 5
  },
  {
    value: 22,
    weight: 6
  },
  {
    value: 28,
    weight: 7
  }
]

console.log(backTrackingKnapack(knapack, 10))