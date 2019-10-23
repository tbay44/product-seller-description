const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../db/db.js');

const app = express();
const port = 3007;

const DIST_DIR = path.join(__dirname, '../dist');

app.use(express.static(DIST_DIR));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/data', (req, res) => {
  const { id } = req.query;
  db.getData(id)
    .then((results) => res.send(results))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}!`);
});
