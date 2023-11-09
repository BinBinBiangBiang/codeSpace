function mul(n){
  if(n == 1){
    return 1;
  }else{
    return n*mul(n-1);
  }
}

console.log(mul(4));