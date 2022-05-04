let promise = new Promise((resolve, reject) => {
  resolve(111)
})

// then 是Promise对象的一个方法  Promise.prototype.then
// 接收两个参数
// 1. 同一个promise可以被多次调用promise
promise.then(() => {
  console.log(111)
})
promise.then(() => {
  console.log(222)
})

// 2. then方法传入的回调函数：可以有返回值
// then方法本身也是有返回值的，它的返回值是promise  因此可以链式调用
// 如果返回的是普通的值，那么这个普通的值被作为一个新的promise的resolve的值
promise
  .then((res) => {
    return { name: 'wjw' }
  })
  .then((res) => {
    console.log(res)
  })

promise
  .then((res) => {
    // return new Promise(resolve(undefined))
  })
  .then((res) => {
    console.log(res)
  })
