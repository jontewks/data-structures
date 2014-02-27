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
