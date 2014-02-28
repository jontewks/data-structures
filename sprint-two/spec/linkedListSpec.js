var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head')
    expect(linkedList).to.have.property('tail')
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.addToTail(6);
    expect(linkedList.tail.value).to.equal(6);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  it("previous tail's next value should point to new tail", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
  });

});

describe("linkedList Extra Credit", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("EC: should be able to add to the head of the list", function(){
    linkedList.addToHead(9);
    linkedList.addToHead(10);
    expect(linkedList.head.value).to.equal(10);
  });

  it("EC: should still have previous head in list", function(){
    linkedList.addToHead(9);
    linkedList.addToHead(10);
    assert.isTrue(linkedList.contains(9));
  });

  it("EC: Should be able to removeHead and reassign to next Head", function(){
    linkedList.addToHead(9);
    linkedList.addToHead(10);
    linkedList.removeHead();
    assert.isTrue(linkedList.contains(9));
  });

  it("EC: Should be able to removeTail and reassign to prev Tail", function(){
    linkedList.addToTail(9);
    linkedList.addToTail(10);
    linkedList.addToTail(7);
    linkedList.removeTail();
    assert.isTrue(linkedList.contains(10));
  });



  // add more tests here to test the functionality of linkedList
});
