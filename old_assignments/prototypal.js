Function.prototype.inherits = function (parentClass) {
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  console.log(this.prototype.constructor);
};

Function.prototype.inherits2 = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
  console.log(this.prototype.constructor);
};

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(this.name + " barks!");
};

function Corgi(name) {
  Dog.call(this, name);
}

Corgi.inherits2(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
