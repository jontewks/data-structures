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
