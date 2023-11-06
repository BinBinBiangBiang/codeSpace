// console.log(this);

// function identify(context){
//   return context.name.toUpperCase();
// }

// function speek(context){
//   var greeting = "Hello, I'm " + identify(context);
//   console.log(greeting);
// }

// var me = {
//   name:"TOm"
// }

// var you = {
//   name:"Jerry"
// }


// // console.log(identify(you))
// speek(me);


function identify(){
  return this.name.toUpperCase();
}

function speek(){
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name:"TOm"
}

var you = {
  name:"Jerry"
}


// console.log(identify(you))
speek.call(me);
