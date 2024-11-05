let obj = {
  name :'管一',
  age:18,
  like:{
    type:'coding'
  }
}

// obj.sex = 'boy'

let arr = ['a', {n: 1}, 1, undefined, null]

function shalldowCopy(obj) {
  // let objCopy = {}
  // if (obj instanceof Array) {
  //   objCopy = []
  // }

  if (typeof obj !== 'object' || obj == null) return  // 只拷贝引用类型
  let objCopy = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = obj[key] 
    }
  }
  return objCopy
}

let newObj = shalldowCopy(obj);
console.log(newObj);