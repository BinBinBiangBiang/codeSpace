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