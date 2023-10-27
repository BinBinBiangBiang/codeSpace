// 1465.矩形蛋糕的高度为 h 且宽度为 w，给你两个整数数组 horizontalCuts 和 verticalCuts，其中：

//  horizontalCuts[i] 是从矩形蛋糕顶部到第  i 个水平切口的距离
// verticalCuts[j] 是从矩形蛋糕的左侧到第 j 个竖直切口的距离
// 请你按数组 horizontalCuts 和 verticalCuts 中提供的水平和竖直位置切割后，
// 请你找出 面积最大 的那份蛋糕，并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果 对 109 + 7 取余 后返回。

var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.sort((a,b)=>a-b);
  verticalCuts.sort((a,b)=> a-b);
  let H = horizontalCuts.length;
  let W = verticalCuts.length;
  let preHmax = Math.max(horizontalCuts[0],h-horizontalCuts[H-1]);
  let preWmax = Math.max(verticalCuts[0],w-verticalCuts[W-1]);
  for(let i = 1 ; i < H;i++){
      preHmax = Math.max(preHmax,horizontalCuts[i] -horizontalCuts[i-1]);
  }
  for(let i = 1 ; i< W;i++){
      preWmax = Math.max(preWmax,verticalCuts[i] - verticalCuts[i-1]);
  }
  return BigInt(preHmax)*BigInt(preWmax) % 1_000_000_007n;
};

let h = [3,1];
let w = [2];
let H = 10;
let W = 8;

let ans = maxArea(H,W,h,w);
console.log(ans)