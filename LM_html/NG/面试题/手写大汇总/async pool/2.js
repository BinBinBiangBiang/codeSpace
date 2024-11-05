async function asyncPool(limit, tasks) {
  const results = []
  const executing = []

  for (let task of tasks) {
    const p = Promise.resolve().then(task)
    results.push(p)

    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)

      if (limit <= executing.length) {
        console.log(executing)
        await Promise.race(executing)
      }
    }
  }
  return Promise.allSettled(results)
}

const promises = []
for (let i = 0; i < 10; i++) {
  promises.push(() => {
    return new Promise((resolve) => {
      let random = (i + 1) * Math.random() * 1000
      setTimeout(() => {
        resolve(`Task ${i + 1} 完成， 耗时 ${random}`)
      }, random)
    })
  })
}
asyncPool(3, promises)
  .then((res) => {
    console.log(res)
  })