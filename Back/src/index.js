require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
require('./db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
  if (!err) console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
