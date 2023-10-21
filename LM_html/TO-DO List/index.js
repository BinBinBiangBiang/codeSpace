// 监听用户敲击enter键
var input = document.getElementById('list-input')
var ul =document.getElementById('list')

// input.onkeyup = function(e){
//   if (e.keyCode == 13){  // enter键的keyCode值为13
//     // 读取到input中的值
//     console.log(input.value);
//     //生成li结构
//         var todoList =`
//           <li>
//             <input type="checkbox">
//             <span>${input.value}</span>
//           </li>
//         `

//     // 将li添加到ul中
//     ul.insertAdjacentHTML('afterbegin', todoList)
//     input.value=""
//   }   
// }


var todoItem = []
input.onkeyup =function(e){
  if(e.keyCode === 13){
    if(input.value != ''){
      todoItem.push(input.value)
      makeList()
      todoItem.pop()
    }
  }
}

function makeList(){
  // 循环数组todoItem,生成多份li结构，添加到其中
  for(var i=0; i<todoItem.length; i++) {
    var todoList  =`
      <li>
        <input type="checkbox">
        <span>${todoItem[i]}</span>
      </li>
    `
    // 将li添加到ul中
    ul.insertAdjacentHTML('afterbegin',todoList)
    input.value=""
  }
}