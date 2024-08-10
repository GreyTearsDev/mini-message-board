require("dotenv").config();
const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = {
  query,
};
