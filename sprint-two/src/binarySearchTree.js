var makeBinarySearchTree = function(value){
  var searchTree = Object.create(setPrototype);

  searchTree.left = null;
  searchTree.right = null;
  searchTree.value = value;

  return searchTree;
};

var setPrototype = {};

setPrototype.insert = function(value, currNode) {
  currNode = currNode || this;
  var node = makeBinarySearchTree(value);
  if (currNode.value < value) {
    return currNode.right === null ? currNode.right = node : currNode.insert(value, currNode.right);
  } else {
    return currNode.left === null ? currNode.left = node : currNode.insert(value, currNode.left);
  }

};

setPrototype.contains = function(value, node) {
  var verdict = verdict || false;
  node = node || this;

  if (node.value === value ) {
    verdict = true;
  }

  for (var key in node) {
    if (node[key] !== null) {
      verdict = verdict || node.contains(value, node[key]);
    }
  }

  return verdict;

};

setPrototype.depthFirstLog = function(callback) {

};


