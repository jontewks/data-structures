/*global _*/

var makeStack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.currentSize = 0;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
    this.storage[this.currentSize] = value;
    this.currentSize++;
  };

stackMethods.pop = function(){
  var item = this.storage[this.currentSize-1];
  if (item !== undefined) {
    delete this.storage[this.currentSize-1];
    this.currentSize--;
    return item;
  }
};

stackMethods.size = function(){
  return this.currentSize;
};

var startTime = new Date().getTime();
for (var i = 0; i < 100000; i++) {
  makeStack();
}
var endTime = new Date().getTime();
var totalTime = endTime - startTime;
console.log('Prototypal stack took', totalTime, 'milliseconds for 100,000 instantiations');

