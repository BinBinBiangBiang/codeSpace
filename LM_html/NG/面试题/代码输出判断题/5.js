function test() {
  setTimeout(() => {
    console.log(1)
  }, 0);
  new Promise((resolve, reject) => {
    console.log(2)
    resolve()
    console.log(3)
    throw new Error
  }).then(() => {
    console.log(4)
  }).catch(() => {
    console.log(5)
  })
  console.log(6)
}

test()