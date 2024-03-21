const obj = {
  xx: function () {
    console.log(this)
  }
}

const fun = obj.xx

// 1
obj.xx()
// 2
fun()