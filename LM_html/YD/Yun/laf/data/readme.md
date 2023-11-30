# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件
    - count 
        注册  name + password   // 已经注册的用户名的不能再注册了
        {total} = await where({name}).count()
        if(total>=0){
          return 
        }

        - limit 用来限制数量
            第五页：offset((page-1)*size).limit(size)
            

      // 按名字查询
      const userName = 'John Doe';
      const result2 = await db.collection('user').where({
          name: userName
      }).get();
      console.log(result2);

      // 条件查询
      const minAge = 18;
      const result4 = await db.collection('user').where('age', '>=', minAge).get();
      console.log(result4);


      // 分页查询
      const pageSize = 10;
      const currentPage = 1;
      const result5 = await db.collection('user').skip((currentPage - 1) * pageSize).limit(pageSize).get();
      console.log(result5);

      // 按ID查询
      const userId = '123456';
      const result3 = await db.collection('user').doc(userId).get();
      console.log(result3);



