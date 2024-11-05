// 定义策略接口
const strategies = {
  S: function(salary) { return salary * 1 / 2; },
  A: function(salary) { return salary * 1 / 4; },
  B: function(salary) { return salary * 1 / 3; }
};

// 上下文
function calculateBonus(salary, level) {
  return strategies[level](salary);
}

console.log(calculateBonus(10000, 'S')); // 5000
console.log(calculateBonus(10000, 'A')); // 2500
console.log(calculateBonus(10000, 'B')); // 3333.3333333333335