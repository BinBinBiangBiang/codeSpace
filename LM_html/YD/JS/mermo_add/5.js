var fib = function(n) {
  var memo = {};
  var fibonacci = function(n) {
      if (n in memo) {
          return memo[n];
      } else {
          if (n < 2) {
              memo[n] = n;
          } else {
              memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
          }
          return memo[n];
      }
  }
  return fibonacci(n);
};


console.log(fib(1500));