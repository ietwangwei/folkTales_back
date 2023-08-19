/**
 * 首页相关接口
 */
const { querySql } = require('../utils/mysql');

/**
 * @desc 首页查询接口
 */
function getUsers(req, res, next) {
  const adSql = 'SELECT * FROM `user`';
  querySql(adSql).then((data, error) => {
    res.json(data)
  });
}

module.exports = {
  getUsers,
};