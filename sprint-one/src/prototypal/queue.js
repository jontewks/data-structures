/*global _*/

var makeQueue = function(){
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.currentSize = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

queueMethods.dequeue = function(){
  var item = this.storage[0];
  if (item !== undefined) {
    delete this.storage[0];
    this.currentSize--;
    var current = 0;
    for (var key in this.storage) {
      this.storage[current] = this.storage[key];
      current++;
    }
    return item;
  }
};

queueMethods.size = function(){
  return this.currentSize;
};


var startTime = new Date().getTime();
for (var i = 0; i < 100000; i++) {
  makeQueue();
}
var endTime = new Date().getTime();
var totalTime = endTime - startTime;
console.log('Prototypal queue took', totalTime, 'milliseconds for 100,000 instantiations');
