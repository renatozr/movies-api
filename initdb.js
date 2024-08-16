require("dotenv").config();
const fs = require("fs");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  multipleStatements: true,
});

function initdb() {
  fs.readFile("./movies_db.sql", "utf8", (err, sql) => {
    if (err) {
      console.error("Error reading SQL file:", err);
      return;
    }

    connection.query(sql, (err) => {
      if (err) {
        console.error("Error initializing the database:", err);
      } else {
        console.log("Success initializing the database!");
      }

      connection.end();
    });
  });
}

initdb();
