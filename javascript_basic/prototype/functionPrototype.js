const parent = {
  name: 'kim',
  isKorean: true,
};

const child = {
  height: 100,
  __proto__: parent,
};

const child2 = {
  kg: 20,
  __proto__: child,
};

console.log(child2.height); // 100
console.log(child2.name); // kim

function Children(name) {
  this.surname = name;
  this.sayHi = function () {
    console.log(`Hi ${this.name}`);
  };
}

Children.prototype = parent;

const bora = new Children('bora');

console.log(bora.name); // kim
console.log(bora.isKorean); // true
