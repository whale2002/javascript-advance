const s = new Set()

;['red', 'blue', 'green', 'green', 'white'].forEach((num) => s.add(num))

// console.log(s)

// let arr = Array.from(s)
// console.log(arr)
// Array.from  将set转为arr
console.log(s.keys())
console.log(s.values())
console.log(s.entries())