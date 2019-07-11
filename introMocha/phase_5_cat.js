function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
}
Cat.prototype.meow = function() {
  return `${this.name} meows`;
}

let spencer = new Cat('spence', 'dan');
let russ = new Cat('russ', 'dan');

russ.meow = function () {
  return `${this.name} is a basketball player not a cat... It doesn't meow`;
}