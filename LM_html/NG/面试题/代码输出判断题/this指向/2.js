var value = 1;

function foo() {
  console.log(this.value);
  console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???