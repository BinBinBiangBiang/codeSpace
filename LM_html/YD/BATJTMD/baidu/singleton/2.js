// ES6 class 企业级开发，大型项目

class SingleDog{
  // 公共方法 属于对象
  show(){
    console.log('我是一个单例对象');
  }
  // 不要直接new
  static getInstance(){
    // console.log('静态方法，类的方法');
    if(!SingleDog.instance){
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
}


// 类的方法
// SingleDog.getInstance()

// new过程 不同内存  如何返回同一个内存呢
// s1 s1 里面的值是地址
// 同一个地址  先生成地址，然后再new 去判断一下 如果已经有了，就不用再去new了
// 思路：if else
// 这就是单例模式
const s1 = SingleDog.getInstance();
const s2 = SingleDog.getInstance();

console.log(s1 === s2);