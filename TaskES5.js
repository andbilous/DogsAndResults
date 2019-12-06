var Animal = function (name){
  this.name = name;
}
Animal.prototype.getName = function() {
 return this.name;
}
var Dog = function (name){
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function (){
   return `Dog ${this.name} is barking`
}

Dog.prototype.constructor = 'Dog';


var dog = new Dog ('Aban');

console.log(dog.getName () === 'Aban');

console.log(dog.bark () === 'Dog Aban is barking'); 
