let obj = {name:'德玛西亚'}

let ws = new WeakSet();
ws.add(obj);
obj = null   // 将obj回收，该代码会使垃圾回收机制自动将obj回收

console.log(ws);
// console.log(obj.name);


// 浏览器的垃圾回收机制是不受我们控制的，他的执行时间是不可控的，
// 在浏览器检测中却能看到值，是因为垃圾回收机制还没生效, 当垃圾回收机制生效后，WeakSet里面一定是空的，看不到值