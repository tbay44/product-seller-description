const express = require('express');
const db = require('../db/db.js');
// const cors =require('cors')

const app = express();
const port = 3007;

app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/data', (req, res) => {
  const { id } = req.query;
  db.getData(id)
    .then((results) => res.send(results));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${port}!`);
});
