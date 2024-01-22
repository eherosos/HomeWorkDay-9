const express = require("express");
const app = express();
const mysql = require("mysql2");

app.use(express.json());

const db = mysql.createConnection({
   host: "localhost",
   port: 3000,
   user: "root",
   password: "",
});

app.listen(db.port, () => {
   console.log(`running on port:${db.port}`);
});
