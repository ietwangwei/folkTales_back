const { sqlClient } = require('../../configs/db.config');
const { Pool } = require('pg');

module.exports = new Pool(sqlClient.pgsql);