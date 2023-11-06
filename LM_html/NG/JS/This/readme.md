函数天生就有作用域，且作用域是一个可见的属性[[scope]]

# this
<!-- 1. this不能引用一个词法作用域中的内容 -->

# this的绑定规则
1. 默认绑定 --- 函数在哪里调用，this就指向哪里（不全对） --> 函数在哪个词法作用域里生效this就指向哪里

2. 隐式绑定 --- 当函数被一个对象所拥有，再调用时，此时this会指向该对象。

3. 隐式丢失 --- 当函数被多个对象链式调用时，this指向引用函数的对象

4. 显示绑定 --- call,apply,bind

5. new 绑定 

# 箭头函数
箭头函数没有this这个概念，写在箭头函数中的this也是它外层函数的this

# 总结：
- JavaScript中的this关键字的绑定规则是根据函数的调用方式来确定的，它指向当前执行上下文中的对象。this的绑定规则通常有以下几种情况：

  1.全局上下文中：

  在全局上下文中，this指向全局对象，通常是window对象（浏览器环境）。
  2.函数内部：

  当一个函数被独立调用（不作为对象的方法、不在构造函数中、不使用call、apply、bind等方法）时，this通常指向全局对象，例如window。
  在严格模式下，独立调用函数时this会是undefined。
  3.对象方法：

  当函数作为对象的方法被调用时，this指向包含该方法的对象。
  javascript
  Copy code
  const obj = {
    prop: 'I am a property',
    method: function() {
      console.log(this.prop); // 'I am a property'
    }
  };
  obj.method();


      1.构造函数：
        当函数被用作构造函数来创建新对象时，this指向新创建的对象。
        javascript
        Copy code
        function Person(name) {
          this.name = name;
        }
        const person = new Person('Alice');
        console.log(person.name); // 'Alice'

      1.显示绑定：
        使用call、apply或bind等方法可以显式绑定this，将this指向指定的对象。
        javascript
        Copy code
        function greet() {
          console.log(`Hello, ${this.name}`);
        }

        const person = { name: 'Alice' };
        greet.call(person); // 'Hello, Alice'

      1.箭头函数：
        箭头函数的this绑定是词法作用域，它指向最接近的包含它的非箭头函数的this值。
        javascript
        Copy code
        const obj = {
          method: () => {
            console.log(this); // 指向全局对象，因为箭头函数没有自己的this
          }
        };
        obj.method();
        了解这些规则对于正确使用this关键字至关重要，因为它决定了在不同上下文中this的值是什么。根据调用方式的不同，this可以指向不同的对象或值。

