const PORT = 8000;
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`I AM RUNNING AT ${PORT}`));

app.get("/", (req, res) => {
  res.json("I am localhost server");
});

app.get("/news", (req, res) => {
  let country = req.query.country;
  let category = req.query.category;
  let page = req.query.page;
  let pageSize = req.query.pageSize;
  const options = {
    method: "GET",
    url: "https://newsapi.org/v2/top-headlines",
    params: {
      country: country,
      category: category,
      page: page,
      pageSize: pageSize,
    },
    headers: {
      "x-api-key": process.env.REACT_APP_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
