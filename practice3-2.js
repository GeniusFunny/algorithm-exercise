/*
2．	A simple scheduling problem. We are given jobs j1, j2… jn, all with known running times t1, t2… tn, respectively. We have a single processor. What is the best way to schedule these jobs in order to minimize the average completion time. Assume that it is a nonpreemptive scheduling: once a job is started, it must run to completion. The following is an instance.
a)	(j1, j2, j3, j4) : (15，8，3，10)

*/
function scheduling(tasks) {
  tasks.sort((a, b) => a > b ? 1 : -1)
  let len = tasks.length
  let timeCost = tasks.map(item => 0)
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      timeCost[j] += tasks[i]
    }
  }
  let averageTime = timeCost.reduce((prev, cur) => prev += cur, 0) / len
  return averageTime
}

const tasks = [15, 8, 3, 10]
console.log(scheduling(tasks))