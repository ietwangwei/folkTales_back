/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  port: 8088,
  sqlClient: {
    pgsql: {
      // 数据库存连接配置
      // host
      host: "localhost",
      // 端口号
      port: "5432",
      // 用户名
      user: "postgres",
      // 密码
      password: "admin",
      // 数据库名
      database: "folktale"
    },
    config: (config) => {
      // 数据库工具配置
      // 自定义operator
      config.registerOperator("ne", ({ field, value }) => {
        return { sql: "?? <> ?", arg: [field, value] };
      });

      // 自定义ignore
      config.registerIgnore("ifNumber", ({ value }) => {
        return !isNaN(Number(value));
      });

      // 监听事件 执行前
      config.onBeforeExecute(function ({ sql }) {
        console.log(sql);
      });

      // 监听事件 执行后
      config.onAfterExecute(function ({ sql, result }) {
        console.log(result);
      });

      // 监听事件 执行出错
      config.onExecuteError(function ({ sql, error }) {
        console.log(error);
      });
    },
  },
};
