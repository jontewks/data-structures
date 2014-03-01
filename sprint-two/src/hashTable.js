var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, v);
  this._size++;
  if (this._size > (this._limit * 0.75)) {
    var newStorage = makeLimitedArray(this._limit * 2)
    this._storage.each(function(item, key, collection){
      if (item !== undefined) {
        var x = getIndexBelowMaxForKey(k, this._limit/2);
        newStorage.set(x, item);
      }
    });
    this._storage = newStorage;
    this._limit = 2 * this._limit;
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var target = this._storage.get(i);
  this._storage.each(function(item, key, collection){
    if (item === target) {
      delete collection[i];
    }
  });

  this._size--;
  if (this._size < (this._limit * 0.25)) {
    var newStorage = makeLimitedArray(this._limit/2);
    this._storage.each(function(item, key, collection){
      if (item !== undefined) {
        var x = getIndexBelowMaxForKey(k, this._limit/2);
        newStorage.set(x, item);
      }
    });
    this._storage = newStorage;
    this._limit = this._limit/2;
  }
};

