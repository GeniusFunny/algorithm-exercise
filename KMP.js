function kmp(strA, strB) {
  const next = makeNext(strA);
  const lenA = strA.length;
  const lenB = strB.length;
  let i = j = 0;
  while(i < lenA && j < lenB) {
    if (strA[i] === strB[j]) {
      i++;
      j++;
    } else{
      if(i > 0) {
        j += (i - next[i-1]);
        i = 0;
      } else {
        j++;
      }
    }
    if (i === lenA) {
      console.log('匹配成功', strA, strB.slice(j-lenB, j));
      return
    }
  }
  console.log('匹配失败')
  return false;
}
function makeNext(str) {
  const next = []
  const len = str.length;
  next[0] = 0;
  for(let i = 1, k = 0; i < len; i++) {
    while(k && str[i] !== str[k]) k = next[k-1]
    if(str[k] === str[i]) k++;
    next[i] = k;
  }
  return next;
}

kmp('ABCDABD', 'BBCABCDABABCDABCDABDE')