const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT;
console.log(process.env.PORT);

const sequelize = require("./sequelize");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../")));

// GET ENDPOINTS
// Phones
app.get("/api/phones", async (req, res) => {
  let info = await sequelize.query(`SELECT * FROM phones`);
  res.status(200).send(info);
});

// Games
app.get("/api/games", async (req, res) => {
  let info = await sequelize.query(`SELECT * FROM games`);
  res.status(200).send(info);
});

// POST ENDPOINT
app.post("/api/orders", async (req, res) => {
  let { customer, name, photo, price } = req.body;

  sequelize
    .query(
      `INSERT INTO orders (customer, photo, name, price) VALUES('${customer}',${name}, ${photo}, ${price} ')`
    )
    .then((res) => {
      res.status(201).send(res[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});

// SERVER LISTENING
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
