const mysql = require("mysql2");
const dbConfig = require("../../configs/db.config");

/**
 * @desc 连接mysql
 */
function connectSql() {
  const { host = "", user = "", password = "", database = "" } = dbConfig;
  return mysql.createConnection({
    host,
    user,
    password,
    database,
  });
}

/**
 * @desc 新建查询连接
 * @param { string } sql
 */
let connect;
function querySql(sql) {
  if (!connect) {
    connect = connectSql();
  }

  return new Promise((resolve, reject) => {
    try {
      connect.query(sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    } catch (error) {
      reject(error);
    } finally {
      // 释放连接
      connect.end();
    }
  });
}

module.exports = {
  querySql,
};
