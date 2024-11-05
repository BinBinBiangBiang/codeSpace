// 浮点数数组转百分比数组

function dataToPercent(data) {
  let total = 0;
  data.forEach(item => {
    total += item;
  });

  // 计算每个数据项的百分比并向下取整
  const percentages = data.map(item => Math.floor((item / total) * 100));
  
  // 计算总和
  let sum = percentages.reduce((acc, curr) => acc + curr, 0);

  // 补偿剩余部分以确保总和为100%
  while (sum < 100) {
    for (let i = 0; i < data.length && sum < 100; i++) {
      if (percentages[i] < Math.ceil((data[i] / total) * 100)) {
        percentages[i]++;
        sum++;
      }
    }
  }

  // 转换为字符串形式
  return percentages.map(p => p + '%');
}

const data = [10.9, 10.4, 10.2, 10.1, 58.3]; // [ '11%', '11%', '10%', '10%', '58%' ]

console.log(dataToPercent(data));