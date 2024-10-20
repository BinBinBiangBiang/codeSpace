// 判断是否是质数
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 判断是否含有两个以上质数因子
function isHasTwoMorePrime(num) {
  let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
        count++;
      }
      if (isPrime(num / i)) {
        count++;
      }
    }
  }
  return count >= 2;
}
