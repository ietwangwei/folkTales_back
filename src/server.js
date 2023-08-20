/**
 * 入口文件
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./router"); // 导入自定义路由文件，创建模块化路由
const DbClient = require("ali-mysql-client");
const app = express();
const { port, mysqlClient } = require("../configs/db.config");

app.db = new DbClient(mysqlClient);
// 解析 form 格式 content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 解析json数据格式 content-type - application/json
app.use(bodyParser.json());

// 注入cors模块解决跨域
app.use(cors());

// 加载控制器
const UserController = require('./controller/user')(app);
app.controller = {
  home: new UserController(),
};

// 加载服务
const userService = require('./app/service/user')(app);
app.service = {
  user: new userService()
};

// 初始化路由
const registerRouter = require('./router');
registerRouter(app);

app.listen(port, () => {
  console.log("Server running at http://127.0.0.1:8088");
});
