class BigNumber {
  static add(bigNumberA, bigNumberB) {
    let maxLen = Math.max(bigNumberA.length, bigNumberB.length);
    bigNumberA = bigNumberA.padStart(maxLen, 0);
    bigNumberB = bigNumberB.padStart(maxLen, 0);
    console.log(bigNumberA, bigNumberB)

    let sum = '';
    for (let i = maxLen - 1; i >= 0; i--) {
      let flag = 0;
      let temp = parseInt(bigNumberA[i]) + parseInt(bigNumberB[i]) + flag ;
      flag = Math.floor(temp / 10);
      sum += temp % 10;
      
      if (flag === 1) {
        sum = "1" + sum;
      }
    }
    return sum;
  }
  static multiply(bigNumberA, bigNumberB) { }
  static isNumber(numberStr) {
    let reg = /^[0-9]*$/;
    return reg.test(numberStr);
  }
  constructor(numberStr) {
    if (typeof numberStr === 'string' && !BigNumber.isNumber(numberStr)) {
      throw new Error(`${numberStr} is not a number-string`);
    }
    this.val = numberStr.split('').map(i => parseInt(i));
  }
  getVal() {
    return this.val.join('');
  }
  add(bigNumber) {
    let result = BigNumber.add(this, bigNumber);
    this.update(result.val);
    return this;
  }
  multiply(bigNumber) {
    let result = BigNumber.multiply(this, bigNumber);
    this.update(result.val);
    return this;
  }
  update(val) {
    this._number = val;
  }
}

let numberA = Math.floor(Math.random() * Math.pow(10, 10));
let numberB = Math.floor(Math.random() * Math.pow(10, 12));
let insA = new BigNumber(numberA.toString());
let insB = new BigNumber(numberB.toString());
let result = BigNumber.add(insA.getVal(), insB.getVal())
console.log(result);
console.log(numberA + numberB)