function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(111);
    }, 1000)
    resolve()
  }).then(() => {
    console.log(333)
  }).then(
    console.log(444)
  )
}

async function main() {
  await test()
  console.log(777);
}
main()
setTimeout(() => {
  console.log(222);
}, 500)
console.log(888);