
function range(start, end) {
  if (start > end) {
    return [];
  } else {
    return [start].concat(range(start + 1, end))
  }
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 0 ) {
    return 0;
  } else{
    return arr[0] + sumRec(arr.slice(1));
  }
}

function exponent (base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return ( base * exponent(base, exp - 1) )
}

function exponent2 (base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp % 2 === 0) return exponent2(base, exp / 2) ** 2 
  if (exp % 2 !== 0) return base * (exponent2(base, (exp - 1) / 2) ** 2) 
}

function fibonacci(n) {
  if (n < 1) return [];
  if (n == 1) return [1];
  if (n == 2) return [1, 1];
  let lastFibSeqWithRusWestBrook = fibonacci(n - 1);
  return lastFibSeqWithRusWestBrook.concat(lastFibSeqWithRusWestBrook[lastFibSeqWithRusWestBrook.length - 1] + lastFibSeqWithRusWestBrook[lastFibSeqWithRusWestBrook.length - 2])
}

const dupArray = [1,2,[3,4,5,[6,7,8], [9], 10], 42]

function deepDup(arr) {
  let notDupped = [];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (Array.isArray(ele)){
      notDupped.push(deepDup(ele));
    } else {
      notDupped.push(ele);
    }
  }
  return notDupped;
}

function bsearch(arr, target) {
  if (arr.length === 0 || !target) return -1;
  let mid = Math.floor(arr.length / 2);  
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return bsearch(arr.slice(0, mid), target); 
  if (arr[mid] < target) {
    let result = bsearch(arr.slice(mid + 1), target);
    if (result !== -1) {
      return mid + 1 + result;
    } else {
      return -1;
    }
  }
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return mergeHelper(mergesort(left), mergesort(right));
}

function mergeHelper(left, right) {
  let returnArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      returnArr.push(right.shift());
    } else {
      returnArr.push(left.shift());
    }
  }
  return returnArr.concat(left).concat(right);
}

function subsets(arr) {
  if (arr.length <= 0) return [arr];
  let subs = [];
  for (let i = 1; i <= arr.length; i++) {
    let sub = arr.slice(0, i);
    subs.push(sub);  
  }
  return subs.concat(subsets(arr.slice(1)));
}

