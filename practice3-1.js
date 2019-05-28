/*
1．	Knapsack Problem. There are 5 items that have a value and weight list below, the knapsack can contain at most 100 Lbs. Solve the problem both as fractional knapsack and 0/1 knapsack.
*/
function knapack_fractiona(knapack, size) {
  let resultValue = 0
  let resultWeight = 0
  let len = knapack.length
  let i = 0
  knapack = knapack.map(item => ({
    ...item,
    price: item.value / item.weight
  }))
  knapack.sort((a, b) => {
    if (a.price > b.price) return -1
    else return 1
  })
  while (resultWeight < size && i < len - 1) {
    if (size - resultWeight >= knapack[i].weight) {
      resultValue += knapack[i].value
      resultWeight += knapack[i].weight
      i++
    } else {
      resultValue += (size - resultWeight) * knapack[i].price
      resultWeight += size - resultWeight
    }
  }
  return resultValue
}

function knapack_0_1(knapack, size) {
  const m = {}
  const len = knapack.length
  for (let w = 0; w <= size; w++) {
    m[`0,${w}`] = 0
  }
  for (let i = 0; i < len; i++) {
    m[`${i},0`] = 0
  }
  for (let i = 1; i <= len; i++) {
    for (let w = 1; w <= size; w++) {
      if (knapack[i-1].weight > w) {
        m[`${i},${w}`] = m[`${i-1},${w}`]
      } else {
        m[`${i},${w}`] = Math.max(m[`${i-1},${w}`], m[`${i-1},${w - knapack[i-1].weight}`] + knapack[i-1].value)
      }
    }
  }
  return m[`${len},${size}`]
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

console.log(knapack_fractiona(knapack, 11))
console.log(knapack_0_1(knapack, 11))