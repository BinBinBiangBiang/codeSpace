let obj = {
  name :'管一',
  age:18,
  like:{
    type:'coding'
  }
}

// obj.sex = 'boy'

function shalldowCopy(obj) {
  let objCopy = {}
  // if(obj instanceof Array) {
  //   objCopy = []
  // }

  if(typeof obj === 'object' || obj === null) return 
  let Object = obj

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      objCopy[key] = obj[key]
    }
  }
  return objCopy;
} 

let newObj = shalldowCopy(obj);
console.log(newObj);