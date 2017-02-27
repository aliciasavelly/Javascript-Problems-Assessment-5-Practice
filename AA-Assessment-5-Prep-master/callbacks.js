Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  }
}



// Write your own myBind(context) method. Add it to Function.prototype.
