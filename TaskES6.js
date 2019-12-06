
class Animal {
  constructor(name){
    this.name=name;
  }
  getName(){
    return this.name;
  }
}

class Dog extends Animal {
  bark(){ return `Dog ${this.name} is barking`}
}


var dog = new Dog ('Aban');

dog.getName () === 'Aban'; // true

dog.bark () === 'Dog Aban is barking'; // true
