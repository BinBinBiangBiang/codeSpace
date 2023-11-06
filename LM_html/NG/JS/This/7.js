Function.prototype.myCall = function(context, ...args) {
  // 检查是否传递了上下文对象，如果没有，则默认为全局对象
  context = context || window;

  // 生成一个唯一的键，以避免覆盖上下文对象的属性
  const uniqueKey = Symbol('uniqueKey');

  // 在上下文对象上创建一个唯一属性，将其值设置为调用的函数
  context[uniqueKey] = this;

  // 调用函数并传递参数
  const result = context[uniqueKey](...args);

  // 删除唯一属性
  delete context[uniqueKey];

  return result;
};
