# 学院的抽奖程序

- 中小企业或机构，未来的外包的甲方
- 江 + 浪  乙方

甲方提供需求 乙方实现
- 2000人左右参与的现场抽奖的小程序
      - 难点和技术方案
      怎么解决并发问题？  通过服务器分布式来解决  => 金数据
      laf ？  采用多核CPU
      node是单线程的 如果CPU是多核的话 每个CPU都可以跑一个线程

- 金数据
    提供了api调用 2000条
    - 不可能一次给2000条 分50条一页 请求40次