let obj = {
  name: 'chin',
  age: 18,
  info: {
    major: 'cs'
  }
}

let newObj = {...obj}
let newObj2 = Object.assign({}, obj)

// 浅拷贝 1. 拓展运算符 2. Object.assign
// 深拷贝 1. JSON.parse(JSON.stringify())  2. 实现 deeoClone 函数 

let newObj3 = JSON.parse(JSON.stringify(obj))


function deepClone(obj) {
  if(typeof obj !== 'object' || obj === null)  return obj

  let result
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

let newObj4 = deepClone(obj)

obj.name = "qhy";
obj.info.major = "cspro";

console.log(newObj4.info.major)

