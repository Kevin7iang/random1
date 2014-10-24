var Queue = function(){
  this.storage = {};
  this.front = 0;
  this.size = 0;
};

Queue.prototype.size = function(){
  return this.size;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.size + this.front] = value;
    this.size++;
};

Queue.prototype.dequeue = function(){
  if (this.size === 0){
    return undefined;
  }
  var temp = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.size--;
  return temp;
};