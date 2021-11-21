const fs = require(fs)

// 创建promise 容器
// 1. 给别人一个承诺 I promise you
// 2. primise一旦创建立即执行里面的代码
// 3. promise 本身不是异步的，里面包含异步代码
let p1 = new Promise((resolve, reject) => {
  fs.readFile('./data/a.txt', 'utf8', function(err, data) {
    if(err) {
      // 失败了，承诺容器中的任务失败了
      console.log(err);
      reject()
    } else {
      console.log(data);
      resolve(data)
    }
  })  
})

p1.then(data => {
  
})