const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080;

// Parse JSON bodies for POST requests
app.use(express.json());
app.use(cors());

// Static public folder middleware

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database");
});

app.get("/ai_apps", async (req, res) => {
    connection.query("SELECT * FROM ai_apps;", (err, results) => {
      if (err) {
        res.status(500).send("Error fetching data");
        console.error(err);
      } else {
        res.json(results);
      }
    });
  });
  
  app.get('/ai_apps/app_id', async (req, res) => {
    connection.query("SELECT * ai_apps;", (err, results) => {
      if (err) {
        res.status(500).send("Error fetching data");
        console.error(err);
      } else {
        res.json(results);
      }
    })
  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });