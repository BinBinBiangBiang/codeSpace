function foo(){
  var a = 1
  this.a = a
  setTimeout(function(){
    console.log(this.a)
  },1000)
}

foo()