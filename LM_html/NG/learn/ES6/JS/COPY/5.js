let obj = {
  name :'管一',
  age:18,
  like:{
    type:'coding'
  },
  a:undefined,
  b:null,
  c:function(){},
  e:Symbol('hello'),
}

// obj.c = obj.d
// obj.d.m = obj.c


let newObj = JSON.parse(JSON.stringify(obj))

obj.like.type = '吃饭'

console.log(newObj);