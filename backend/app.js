const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
      app.use(cors());
      app.use(express.json());
 
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "component15",
});

app.post("/kor15/create", (req, res) => {
  const id = req.body.id;
  const n = req.body.n;
  const number = req.body.number;
  const sql = "INSERT INTO kor15 (id, n, number) VALUES (?, ?, ?)";
  
  db.query(sql, [id, n, number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error inserting data into the database.");
    } else {
      res.send("Data inserted successfully.");
    }
  });
});

app.get("/kor15/:id", (req, res) => {
  const id = req.params.id;

  // ดึงข้อมูลจากฐานข้อมูลโดยอ้างอิงจาก ID ที่ร้องขอ
  db.query("SELECT * FROM kor15 WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching data from the database.");
    } else {
      if (result.length > 0) {
        res.send(result[0]);
      } else {
        res.status(404).send("Data not found for the specified ID.");
      }
    }
  });
});

app.delete("/kor15/:id", (req, res) => {
  const id = req.params.id;

  // ลบข้อมูลจาก MySQL โดยอ้างอิงจาก ID ที่ร้องขอ
  db.query("DELETE FROM kor15 WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting data from the database.");
    } else {
      res.send("Data deleted successfully.");
    }
  });
});

app.listen(7777, () => {
    console.log("Server is running on port 7777");
});