var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    var item = storage[size-1];
    if (item !== undefined) {
      delete storage[size-1];
      size--;
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
  makeStack();
}
var endTime = new Date().getTime();
var totalTime = endTime - startTime;
console.log('Functional stack took', totalTime, 'milliseconds for 100,000 instantiations');


