1. git init 初始化本地仓库（让git掌管文件夹）
2. git status 查看该仓库中的文件状态
3. git add . 提交所有的文件到git暂存区
4. git commit -m '你的注释' 将暂存区的代码提交到master区域 
5. git push origin master 将文件推送到远程仓库

--test


//--------------------------------------------------------------------------------------
- git init 初始化本地仓库（让git掌管文件夹）
  - .git 会生成一个隐藏文件夹 代码仓库

- git add 文件名 --- 提交所有的文件到git暂存区（可以多次add，不会留下记录）
- 当我们在写代码时，有可能会改到别人的代码
  - git status --- 查看当前仓库中的文件状态
  - git diff --- 对比修改，在add之前，再次确认改了哪些地方
- git commit -m ‘你的注释’ --- 将暂存区的代码提交到master区域
- git push origin master --- 将文件推送到远程仓库

ssh-keygen -t rsa -C 2570945644@qq.com 绑定秘钥
