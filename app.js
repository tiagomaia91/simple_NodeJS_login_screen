const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('login');
});

app.listen(3000, () => {
  console.log('Login app listening on port 3000!');
});
