const mysql = require('mysql');

const connectionPool = mysql.createPool({
  connectionLimit:10,
  host     : process.env.DB_HOST/* 'juantirado.wmdd.ca' */,
  user     : process.env.DB_USER/* 'assignment4' */,
  password : process.env.DB_PASS/* 'Nazly9823*' */,
  database : process.env.DB_NAME/* 'music' */,
  multipleStatements: true
});

exports.cp = connectionPool;
