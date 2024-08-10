require("dotenv").config();
const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = {
  query,
};
