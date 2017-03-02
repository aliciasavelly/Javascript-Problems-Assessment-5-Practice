
// write Function.prototype.myBind.
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};


// write Function.prototype.inherits.
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.
  function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array[i];
      }
    }
  }

Function.prototype.myCall = function(ctx, ...args) {
    return this.bind(ctx)(...args);
};



// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.
function myCurry(fn, object, numArgs){
  let arr = [];
  function _curried(arg){
    arr.push(arg);
    if(arr.length === numArgs){
      return fn.apply(object, arr);
    }else {
      return _curried;
    }
  }
  return _curried;
}
