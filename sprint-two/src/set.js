var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this[item] = item;
	console.log(this);
};

setPrototype.contains = function(item){
	verdict = false;

	for (var key in this) {
		if (this[key] === item) {
			verdict = true;
		}
	}
	return verdict
};

setPrototype.remove = function(item){
	delete this[item];
};
