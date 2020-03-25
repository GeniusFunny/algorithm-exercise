let arr = [1, 1, 2, 3, 4, '4', '4', '5', 's', 'ss', 'ss', NaN, NaN, 'NaN', 'NaN', undefined, undefined, 'undefined', 'undefined', {}, {}, [], []]
arr = arr.reduce((acc, cur, idx, src) => acc.includes(cur) ? acc : acc.push(cur) && acc, [])


console.log(arr)

