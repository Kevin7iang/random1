var stack = function(){

  var stackInstance = {};
  var storage = {};
  var size = 0;

  stackInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  stackInstance.pop = function(){
    if (size === 0){
      return undefined;
    } else{
      size --;
      var temp = storage[size];
      delete storage[size];
      return temp;
    }
  };

  stackInstance.size = function(){
    return size;
  };

  return stackInstance;
};