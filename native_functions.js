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

Array.prototype.myUnshift = function(...val) {
  var newArr = this.slice();
  this.splice(0, this.length, ...val, ...newArr);
  return this.length;
};

var arr = [2, 4, 5, 1, 3];
var unshiftArr = arr.myUnshift(9, 6, 4);
console.log(arr, unshiftArr);

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
var arr = [1]
arr.mySort((a, b) => {
  return b - a;
});

// Array
// String
// Number
// Object
// Boolean
