let arr = [2, 4, 2, 5, 2, 7]

let res1 = [...new Set(arr)]
let res2 = Array.from(new Set(arr))

let res3 = []
arr.forEach(item => {
  if(res3.indexOf(item) === -1) {
    res3.push(item)
  }
})

console.log(res3)
