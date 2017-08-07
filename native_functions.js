// Array.push
Array.prototype.myPush = function(...val) {
  for (var i = 0; i < val.length; i++) {
    this[this.length] = val[i];
  }
  return this.length;
};

var arr = [2, 4, 5, 1, 3];
var pushArr = arr.myPush(9);
console.log(arr, pushArr);

//Array unshift
Array.prototype.myUnshift = function(...val) {
  var newArr = this.slice();
  this.splice(0, this.length, ...val, ...newArr);
  return this.length;
};

var arr = [2, 4, 5, 1, 3];
var unshiftArr = arr.myUnshift(9, 6, 4);
console.log(arr, unshiftArr);

//Array sort
Array.prototype.mySort = function(callback) {
  var swap = (arr, i, j) => {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  if (this.length > 1) {
    for (var i = 0; i < this.length; i++) {
      for (var j = 1; j < this.length; j++) {
        var a = this[j - 1];
        var b = this[j];
        if (callback(a, b) > 0) {
          swap(this, j - 1, j);
        }
      }
    }
  }
  return this;
};

var arr = [100, 10015, 857, 1429, 9, 8793, 129];
var arr = [1];
arr.mySort((a, b) => {
  return b - a;
});

//Array.filter
Array.prototype.myFilter = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
var arr = [2, 4, 5, 1, 3];
var filterArr = arr.myFilter(a => {
  return a > 2;
});
console.log(arr, filterArr);

//Array.pop
Array.prototype.myPop = function() {
  if (this.length > 0) {
    var popped = this.slice(this.length - 1);
    var arr = this.slice(0, this.length - 1);
    this.splice(0, this.length, ...arr);
    return popped;
  } else {
    return undefined;
  }
};

var arr = [2, 3, 5, 1, 5, 3, 4];
var popArr = arr.myPop();
console.log(arr, popArr);

//Array.shift
Array.prototype.myShift = function() {
  if (this.length > 0) {
    var shifted = this.slice(0, 1);
    var arr = this.slice(1);
    this.splice(0, arr.length, ...arr);
    this.splice(arr.length);
    return shifted;
  } else {
    return undefined;
  }
};
var arr = [2, 3, 5, 1, 5, 3, 4];
var shiftArr = arr.myShift();
console.log(arr, shiftArr);

//Array.map
Array.prototype.mymap = function(callback) {
  arr = [];
  for (let i = 0; i < this.length; i++) arr[i] = callback(this[i]);
  return arr;
};
var arr = [];
arr.mymap(Math.sqrt);

//Array.reduce
Array.prototype.myReduce = function(callback, initialValue) {
  var acc = initialValue || undefined;
  for (var i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback(acc, this[i]);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

var arr = [2, 3, 5, 1, 5, 3, 4];
var reduceArr = arr.myReduce((a, b) => {
  return a + b;
});
console.log(arr, reduceArr);
