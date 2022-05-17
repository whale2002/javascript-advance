// const arr1 = [
//   {
//     code: 0,
//     value: 'zs'
//   },
//   {
//     code: 1,
//     value: 'ls'
//   },
//   {
//     code: 2,
//     value: 'ww'
//   }
// ]
// const arr2 = [
//   {
//     code: 0,
//     value: 'zs'
//   },
//   {
//     code: 1,
//     value: 'ls'
//   }
// ]

// function differenceBy(arr2, arr2) {
//   let set1 = new Set(), set2 = new Set()

//   arr1.forEach(item => {
//     set1.add(JSON.stringify(item))
//   })
//   arr2.forEach(item => {
//     set2.add(JSON.stringify(item))
//   })

//   let res = [];
//   [...set1].forEach(item => {
//     if(!set2.has(item)) {
//       res.push(JSON.parse(item))
//     }
//   })

//   console.log(res);
// }

// differenceBy(arr1, arr2)

let arr1 = [
  { fpcid: '2da37fdfe66140089dc3367b21cc6194', fpcNameCode: '34' },
  { fpcid: '2da37fdfe66140089dc3367b21cc6195', fpcNameCode: '33' },
  { fpcid: '2da37fdfe66140089dc3367b21cc6196', fpcNameCode: '35' },
  { fpcid: '2da37fdfe66140089dc3367b21cc6197', fpcNameCode: '36' }
]
let arr2 = [
  { fpcid: '2da37fdfe66140089dc3367b21cc6194', fpcNameCode: '34' },
  { fpcid: '2da37fdfe66140089dc3367b21cc6195', fpcNameCode: '33' }
]

// function getDifferenceSetB(arr1, arr2, typeName) {
//   return Object.values(
//     arr1.concat(arr2).reduce((acc, cur) => {
//       if (
//         acc[cur[typeName]] &&
//         acc[cur[typeName]][typeName] === cur[typeName]
//       ) {
//         delete acc[cur[typeName]]
//       } else {
//         acc[cur[typeName]] = cur
//       }
//       return acc
//     }, {})
//   )
// }

// console.log(getDifferenceSetB(arr1, arr2, 'fpcid'))

function Compare(objA, objB) {
  if (!isObj(objA) || !isObj(objB)) return false //判断类型是否正确
  if (getLength(objA) != getLength(objB)) return false //判断长度是否一致
  return CompareObj(objA, objB, true) //默认为true
}

function CompareObj(objA, objB, flag) {
  for (var key in objA) {
    if (!flag)
      //跳出整个循环
      break
    if (!objB.hasOwnProperty(key)) {
      flag = false
      break
    }
    if (!isArray(objA[key])) {
      //子级不是数组时,比较属性值
      if (objB[key] != objA[key]) {
        flag = false
        break
      }
    } else {
      if (!isArray(objB[key])) {
        flag = false
        break
      }
      var oA = objA[key],
        oB = objB[key]
      if (oA.length != oB.length) {
        flag = false
        break
      }
      for (var k in oA) {
        if (!flag)
          //这里跳出循环是为了不让递归继续
          break
        flag = CompareObj(oA[k], oB[k], flag)
      }
    }
  }
  return flag
}
