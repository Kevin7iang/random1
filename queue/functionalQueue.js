var queue = function(){

  var queueInstance = {};
  var storage = {};
  var front = 0;
  var size = 0;

  queueInstance.enqueue = function(value){
    storage[front + size] = value;
    size++;
  };

  queueInstance.dequeue = function(){
    if (size === 0){
      return undefined;
    } else{
      var temp = storage[front];
      delete storage[front];
      front++;
      size--;
      return temp;
    }
  };

  queueInstance.size = function(){
    return size;
  };

  return queueInstance;
};