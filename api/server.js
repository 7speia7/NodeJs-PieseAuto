if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  const express = require('express');
  const server = express();
  server.get('/', (req, res) => {
    res.send('<h1>Piese auto project api</h1>')
});
  module.exports = server;