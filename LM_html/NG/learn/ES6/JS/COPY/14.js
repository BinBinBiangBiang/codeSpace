let obj = { a: 1 };
obj.self = obj; // 形成循环引用
// 以下代码会抛出异常
// let deepCopy = JSON.parse(JSON.stringify(obj));
