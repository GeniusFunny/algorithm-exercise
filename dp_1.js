/*
动态规划1: 钢条切割
给定一段长度为 n 英寸的钢条和一个价格表 pi(i=1,2,…,n)， 求切割钢条方案，使得销售收益 rn 最大。
长度i	  1	 2	3	 4  5  6  7	 8	9  10
价格pi  1  5	8	 9	10 17 17 20	24 30
每段长度为 i 英寸的钢条为公司带来 pi 美元的收益
*/

function rodCutting(p) {
  const price = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]
  for (let i = 2; i <= p; i++) {
    let max = price[i] || 0
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      max = Math.max(price[j] + price[i - j], max)
    }
    price[i] = max
  }
  return price[p]
}

for (let i = 1; i <= 50; i++) {
  console.log(`${i}: ${rodCutting(i)}`)
}