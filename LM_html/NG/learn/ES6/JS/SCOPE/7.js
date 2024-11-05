function foo(){
  let a = 0
  console.log(a)
  with(obj){
    b = 2
  }
  
}

var obj ={
  a : 1
}

foo()

console.log(b)
