# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    JS是单线程  特点：简单 + event loop  缺点：太脆了
    throw + try catch()


- cache 自由变量 key 设置
  区分 1 + 12  和 11 + 2     '1,12'  '11,2'

    - 通过arguments这个伪数组拿到所有的参数  但是下面两种方法的兼容性不好
    1.[...arguments].join('')
    2.Array.from(arguments)

    Array.prototype.join.call(arguments,',')

- fibonacci 爬楼梯
    - 递归的通用问题， 不停的入栈
        自顶向下 CEO 递归的不停的入栈

    - 记忆函数 备忘录
    - 自底向上
        f(1) = 1 f(2) = 1 f(3) = f(1) + f(2)
        f(n) = f(n-1) + f(n-2)


- 使用递归，快速的，基于自顶向下的思想来解决问题
    - 程序栈的问题  40%

- 可以先试用memoize 备忘录模式 ， 优化
   空间 { }  key:value

- 都可以自底向上解决，每一步都有一个公式 f(n) = f(n-1) + f(n-2)  这个就叫做动态规划 dp
    for 循环(自底向上) 88%

- 99.9%
    在空间上再优化一下 ， 我们不需要去存储，我们只要最后的结果
     [a,b] = [b,a+b]