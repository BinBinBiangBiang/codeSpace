global.gc();  // 强制执行垃圾回收
console.log(process.memoryUsage()) //4619368   //计算node中内存占用情况

// let obj = {name:'德玛西亚',age:new Array(5*1024*1024)}
let ws = new WeakSet();
// ws.add(obj)


// obj = null;

global.gc(); 
console.log(process.memoryUsage()) 
