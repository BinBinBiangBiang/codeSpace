// 和数据库连接的相关操作

const mysql = require('mysql2');
const config = require('../config') 

// 创建线程池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT,
});

// 连接mysql
const allService = {
  query : function(sql,values){
    // pool 连接
    return new Promise((resolve,reject)=>{
      pool.getConnection((err,connection) => {
        if(err){
          reject(err);
        }else{
          // 执行sql语句
          connection.query(sql,values,function(err,rows){
            if(err){
              // 释放错误
              reject(err);
            }else{
              resolve(rows);
            }
            connection.release(); // 释放连接
          })
        }
      })
    })
  }
}

// 检测数据库连接是否正常
const testConnection = async () => {
  try {
    const result = await allService.query('SELECT 1 as test');
    console.log('Database connection test result:', result);
  } catch (error) {
    console.error('Database connection test failed:', error);
  }
};

testConnection();

// 登录
const userLogin = (username,password) =>{
  let _sql = `select * from users where username = "${username}" and password = "${password}";`
  return allService.query(_sql)
}

// 注册
const userRegister = async (username, password, nickname) => {
  let sql1 = `select * from users where username = "${username}";`
  try {
    let result = await allService.query(sql1);
    if (result && result.length > 0) {
      return false;
    } else {
      let sql2 = `insert into users (username, password, nickname) values ("${username}","${password}","${nickname}");`
      const insertResult = await allService.query(sql2);

      // 直接返回插入操作的结果
      return insertResult;
    }
  } catch (error) {
    throw error; // 抛出异常以便在调用方进行处理
  }
}

// 根据类型查找笔记列表
const findNoteListByType = (note_type)=>{
  let _sql = `select * from note where note_type="${note_type}";`
  return allService.query(_sql)
}

// 根据ID找数据
const findNoteDetailById = (note_id)=>{
  let _sql = `select * from note where id="${note_id}";`
  return allService.query(_sql)
}

// 发布笔记
const notePublish = (values) =>{
  const _sql = `insert into note (note_content,title,head_img,note_type,nickname,userId,c_time,m_time) values 
  ("${values[0]}","${values[1]}","${values[2]}","${values[3]}","${values[4]}","${values[5]}","${values[6]}","${values[7]}");`
  return allService.query(_sql)
}

module.exports = {
  userLogin,
  userRegister,
  findNoteListByType,
  findNoteDetailById,
  notePublish
}

