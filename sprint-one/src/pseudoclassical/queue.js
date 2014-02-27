var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.currentSize = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.currentSize] = value;
  this.currentSize++;
};

Queue.prototype.dequeue = function(){
  var item = this.storage[0];
  if (item !== undefined) {
    delete this.storage[0];
    this.currentSize--;
    for (var key in this.storage) {
      var current = 0;
      this.storage[current] = this.storage[key];
    }
    return item;
  }
};

Queue.prototype.size = function(){
  return this.currentSize;
};
