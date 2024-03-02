function a(){
  setTimeout(()=>{
    console.log('a');
  },1000)
}

function b(){
  setTimeout(()=>{
    console.log('b');
  },500)
}

function run(){
  let gen = fn()

  function next(err,data){
    let result = gen.next(data)
    if(result.done) return 
  }

  next()
}

function* g(){
  var cur = yield a();
  if(cur){
    yield b();
  }
}

var gen = g();
console.log(gen.next());
console.log(gen.next());

