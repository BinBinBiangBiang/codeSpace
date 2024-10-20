const requestList = []

for (let i = 0; i < 50; i++) {
  requestList.push(
    () => 
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (i === 30) {
            reject(new Error('出错啦！'))
          }
          console.log('done', i)
          resolve(i)
        }, 1000 * Math.random())
      })
  )
}

const run = async(requestList, max) => {
  const dRequestList = []
  for (let i = 0; i < requestList.length; i+=max) {
    const request = requestList.slice(i, i+max)
    dRequestList.push(request)
  }
  for (let i = 0; i < dRequestList.length; i++) {
    const group = dRequestList[i]
    try {
      const result = await Promise.allSettled(group.map(fn => fn()))
      console.log('接口返回值：', result)
    } catch (error) {
      console.log(error)
    }
  }
}

run(requestList, 10)