var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var item = storage[0];
    if (item !== undefined) {
      delete storage[0];
      size--;
      var current = 0;
      for (var key in storage) {
        storage[current] = storage[key];
        current++;
      }
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var startTime = new Date().getTime();
for (var i = 0; i < 100000; i++) {
  makeQueue();
}
var endTime = new Date().getTime();
var totalTime = endTime - startTime;
console.log('Functional queue took', totalTime, 'milliseconds for 100,000 instantiations');
