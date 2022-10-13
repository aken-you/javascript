function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

let me = new Person('kim');
console.log(me.getName()); // kim

Person.prototype.name = 'Lee';
console.log(Person.prototype.getName()); // Lee