// Object.prototype.tostring.call(this)

let s = '[object Boolean]';

function isType(s){
  return Object.prototype.toString.call(s).slice(8, -1);
}


console.log(isType(s))
