var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = makeTree(value);
  this.children.push(child);

};

treeMethods.contains = function(target){
  var verdict = {false: false};

  if (this.value === target) {
    verdict.true = true;
  } else if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
   	  var result = this.children[i].contains(target)
      verdict[result] = result;
    }
  }
  
  return verdict.true ? verdict.true : verdict.false;

};