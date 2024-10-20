// 假如我有一次性下载几十个文件，如何去控制并发请求  // 未完成
import axios from 'axios'

export const handQueue = (reqs) => {
  reqs = reqs || []
  const requestQueue = (max) => {
    max = max || 6
    const queue = []
    let current = 0

    const dequeue = () => {
      while (current < max && queue.length) {
        const requestPromise = queue.pop()
      }
    }
  }
}