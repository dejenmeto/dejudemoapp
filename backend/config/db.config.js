// import mysql2 module
const mysql = require("mysql2/promise");
// define the connection parametre of the database
const dbconfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
};
// create the pool connection of mysql.createPool(dbconfig);
const pool = mysql.createPool(dbconfig);
// Create an async function to execute sql queries
async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}
// export the query function
module.exports = {
  query,
};
