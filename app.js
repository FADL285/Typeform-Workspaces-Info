// Imports
import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
