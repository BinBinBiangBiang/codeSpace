let temperatures =[73,74,75,71,69,72,76,73]

var dailyTemperatures = function(temperatures) {
    const len = temperatures.length;
    const ans = []
    for(let i = 0; i < len; i++) {
      const item = temperatures[i];
      let flag = false;
      for(let j = i+1; j < len; j++) {
        const high = temperatures[j];
        if(item < high){
          ans.push(j-i);
          flag = true;
          break;
        }
      }
      if(!flag){
        ans.push(0);
      }
    }
    
    return ans;
};

console.log(dailyTemperatures(temperatures));