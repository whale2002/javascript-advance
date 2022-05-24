function debounce(fn, delay = 300) {
  let timer

  return function () {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle(fn, delay) {
  let flag = true

  return function () {
    if (!flag) return
    flag = false

    timer = setTimeout(() => {
      fn()
      flag = true
    }, delay)
  }
}
