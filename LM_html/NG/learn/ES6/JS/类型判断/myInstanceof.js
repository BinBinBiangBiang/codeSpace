function myInstanceof(L,R){
  while(L !== null){
    if(L.__proto__ === R.prototype){
      return true;
    }else{
      L = L.__proto__;
    }
  }
  return false;
}

const arr = [1]

console.log(myInstanceof(arr,Array))   // 输出:true
console.log(myInstanceof(arr,Object))  // 输出:true