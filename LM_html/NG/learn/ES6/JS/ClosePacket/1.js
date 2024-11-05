var arr = []

for(var i = 0 ;i< 10 ;i++){

  // 自执行函数
  (function(j){
    // var j = i
    arr[i] = function(){
      console.log(j)
    }
  })(i)
  

}



for(var j = 0 ;j< arr.length ;j++){
  arr[j]();
}