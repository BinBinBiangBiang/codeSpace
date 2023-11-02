// 对象
let obj = {
  name: '丁总',
  age : 18
}

// 读取值
// console.log(obj['name'])

// 修改值
obj.girlFriend = '翠花'

// 增加值
// 1.直接加
obj.gender = '男'

// 2.通过变量加
let girl = 'girlFriend'
obj[girl]  = '小红'

// 删除值
delete obj.girlFriend