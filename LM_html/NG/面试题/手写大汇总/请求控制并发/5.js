const requestList = []

for (let i = 0; i < 100; i++) {
  requestList.push(
    () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (i === 30) {
            reject(new Error('出错啦！'))
          }
          console.log('done', i)
          resolve(i)
        }, Math.random() * 1000)
      })
    })
}

const limit = 10
const handlerRequest = async (reqList, limit) => {
  const dRequestList = []
  for (let i = 0; i < reqList.length; i += limit) {
    const request = reqList.slice(i, i + limit)
    dRequestList.push(request)
  }

  for (let i = 0; i < dRequestList.length; i++) {
    const group = dRequestList[i]
    try {
      const result = await Promise.allSettled(group.map(fn => fn()))
      console.log('结果：', result)
    } catch (err) {
      console.log(err)
    }
  }
}

handlerRequest(requestList, limit)