let s = Symbol('key')

let obj = {}

Object.defineProperty(obj, s, {
  configurable: true,
  enumerable: true,   // δΈηζ
  value: 'wjw'
})

console.log(Object.keys(obj))