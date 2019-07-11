Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[i] > this[j]) {
          [this[i], this[j]] = [this[j], this[i]];
          // let temp = this[j];
          // this[j] = this[i];
          // this[i] = temp;
          sorted = false;
        }
      }
    }
  }
  return this;
}

const stringToSub = "findMySubstrings"
String.prototype.substrings = function() {
  let substrings = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      substrings.push(this.substr(i,j));
    }
  }
  return substrings;
}