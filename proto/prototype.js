let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

// rabbit.__proto__ = animal; 
// 设置 rabbit.[[Prototype]] = animal`

console.log(rabbit.eats);