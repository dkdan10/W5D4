const eachCB = (el) => {
  console.log(el)
};
Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};


const mapCB = (el) => {
  return el * 2;
};
Array.prototype.myMap = function (cb) {
  let mapped = [];
  this.myEach((el)=>{
    mapped.push(cb(el));
  })
  return mapped;
};

const arr1 = [1,2,3,4]

function reduceCB(acc, ele) { 
  return acc + ele;
}

Array.prototype.myReduce = function (cb, initialValue) {
  let returnValue = initialValue;
  for (let i = 0; i < this.length; i++) {
    const ele = this[i];
    if (i === 0 && !initialValue) {
      returnValue = cb(0, ele);
    } else {
      returnValue = cb(returnValue, ele);
    } 
  }
  return returnValue;
}



