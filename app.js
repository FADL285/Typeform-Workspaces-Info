// Imports
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getWorkspaces } from './handlers/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { error: null });
});

app.post('/workspaces', async (req, res) => {
  const { token } = req.body;
  try {
    const response = await getWorkspaces(token);
    res.render('workspaces', { workspaces: response.items });
  } catch (error) {
    res.status(403).render('index', { error: error.message });
  }
});

// 404  page
app.use((req, res) => {
  res.status(404).render('404');
});

// 500 Internal Server Error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
