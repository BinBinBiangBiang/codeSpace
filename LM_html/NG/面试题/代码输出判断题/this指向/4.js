// case 1
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
console.log('case1:', checkscope());

// case 2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
console.log('case2.1:', checkscope()());
const method = checkscope();
console.log('case2.2:', method());
