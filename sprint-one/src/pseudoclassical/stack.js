// /*global _*/

var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this.storage = {};
  this.currentSize = 0;

};


Stack.prototype.push = function(value){
    this.storage[this.currentSize] = value;
    this.currentSize++;
  };

Stack.prototype.pop = function(){
  var item = this.storage[this.currentSize-1];
  if (item !== undefined) {
    delete this.storage[this.currentSize-1];
    this.currentSize--;
    return item;
  }
};

Stack.prototype.size = function(){
  return this.currentSize;
};

// var newStack = new Stack();

var startTime = new Date().getTime();
for (var i = 0; i < 100000; i++) {
  var that = new Stack();
}
var endTime = new Date().getTime();
var totalTime = endTime - startTime;
console.log('Pseudoclassical stack took', totalTime, 'milliseconds for 100,000 instantiations');
