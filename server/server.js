const express = require('express');
const app = express();
const port = 3007;

app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.send('Hello from the server!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
});