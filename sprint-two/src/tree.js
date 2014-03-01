var makeTree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

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
  child.parent = this;
  this.children.push(child);
};

treeMethods.removeFromParent = function() {
  var newTree = makeTree(this.value);
  newTree.children = this.children;
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      delete this.parent.children[i];
    }
  }
};

treeMethods.contains = function(target){
  var verdict = false;

  if (this.value === target) {
    verdict = true;
  } else if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      verdict = verdict || result;
    }
  }

  return verdict;
};

treeMethods.traverse = function(callback, node) {
  var node = node || this;

  callback.apply(node, arguments);

  if (node.children.length) {
    for(var i = 0; i < node.children.length; i++){
      node.traverse(callback, node.children[i]);
    }
  }
};


