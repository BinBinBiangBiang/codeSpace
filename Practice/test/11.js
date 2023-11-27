var isPalindrome = function(s) {
  if(s == ''){
      return true;
  }
  let newS = s.replace(/[^a-zA-Z0-9]/g,'')
  let s1 = newS.toLowerCase();
  const len = newS.length;
  for(let i = 0,j = len-1;i<j;i++,j--){
      if(s1.charAt(i) === s1.charAt(j)){
          continue;
      }else{
          return false
      }
  }
  return true;
};


s = "0P";

console.log(isPalindrome(s));