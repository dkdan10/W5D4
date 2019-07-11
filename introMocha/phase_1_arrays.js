const arr = [1,2,3,-1,-4,4];

Array.prototype.uniq = function() {
  // console.log(this);
  const myUniqs = [];
  this.forEach(ele => {
    if (!myUniqs.includes(ele)) {
      myUniqs.push(ele);
    }
  }); 
  return myUniqs;
}

Array.prototype.twoSum = function() {
  const twoSums = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
}

const poseArray = [[1,2,3,4],[4,5,6,7],[7,8,9,42]]
Array.prototype.transpose = function() {
  let transposed = new Array(this.length);
  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = new Array();
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      transposed[i].push(this[j][i])
    }
  }
  return transposed;
}

