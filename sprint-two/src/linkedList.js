var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    this[value] = node;
    if (!this.tail) {
      this.head = node;
      this.head.next = node;
    } else if (this.tail === this.head) {
      this.head.next = node;
    } else {
      this.tail.next = node.value;
    }
    this.tail = node;
  };

  list.removeHead = function(){
    var headVal = this.head;
    delete this.head.value;
    this.head = headVal.next;
    return this.head.value;
  };

  list.contains = function(target, node){
    var verdict = false;
    for (var key in this) {
      if (this[key].value === target) {
        verdict = true;
      }
    }
    return verdict;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

