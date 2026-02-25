const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jmc_qams",
  password: "p@ssword",
  port: 5432,
});

module.exports = pool;