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
      this.tail = node;
      this.tail.prev = node;
    } else if (this.tail === this.head) {
      this[this.tail.value].next = node;
      this.head.next = node;
      this.tail = node;
      this.tail.prev = this.head;
    } else {
      var lastNode = this[this.tail.value];
      lastNode.next = node;
      this.tail = node;
      this.tail.prev = lastNode;
    }

  };

  list.removeHead = function(){
    var headValue = this.head;
    delete this[this.head.value];
    this.head = headValue.next;
    this.head.prev = null;
    return headValue.value;
  };

  list.removeTail = function(){
    var tailValue = this.tail;
    delete this[this.tail.value];
    this.tail = tailValue.prev;
    this.tail.next = null;
    return tailValue.value;
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

  list.addToHead = function(value) {
    var node = makeNode(value);
    this[value] = node;
    if (!this.head) {
      this.tail = node;
      this.tail.prev = node;
      this.head = node;
      this.head.next = node;
    } else {
      var prevNode = this[this.head.value];
      prevNode.prev = node;
      node.next = prevNode;
      this.head = node;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

