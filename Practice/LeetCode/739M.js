// 739.给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，
// 下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

let temperatures =[73,74,75,71,69,72,76,73]
// 输出[1,1,4,2,1,1,0,0]
// var dailyTemperatures = function(temperatures) {
//     const len = temperatures.length;
//     const ans = []
//     for(let i = 0; i < len; i++) {
//       const item = temperatures[i];
//       let flag = false;
//       for(let j = i+1; j < len; j++) {
//         const high = temperatures[j];
//         if(item < high){
//           ans.push(j-i);
//           flag = true;
//           break;
//         }
//       }
//       if(!flag){
//         ans.push(0);
//       }
//     }
    
//     return ans;
// };

var dailyTemperatures = function(){
  const len =  temperatures.length;
  const stack = [];
  const res = new Array(len).fill(0); // 创建一个长度为len的数组全部填充0
  for(let i = 0; i < len;i++) {
    // 靠while来找存在打破递减趋势的温度
    while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
      const top = stack.pop();
      res[top] = i -top;
    }

    stack.push(i);
  }
  return res;
};

console.log(dailyTemperatures(temperatures));