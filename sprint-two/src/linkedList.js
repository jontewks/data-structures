var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var lastNode;

  list.addToTail = function(value){

    var node = makeNode(value);
    if (this.head === null) {
      list.head = list.tail = node;
      list.head.next = value;
    } else {
      lastNode = list.tail = node;
    }
  };

  list.removeHead = function(){
    var val = list.head.value;
    var newHead = lastNode;
    delete lastNode;
    list.head = newHead;
    return val;
  };

  list.contains = function(target, node){
    if (this.head.value === target || this.tail.value === target) {
      return true;
    } else {
      return this.target !== undefined;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};