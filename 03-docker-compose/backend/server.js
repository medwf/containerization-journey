const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'crud_db'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.get('/articles', (req, res) => {
  db.query('SELECT * FROM articles', (err, results) => {
    if (err) {
      return res.status(500).send('Database query failed');
    }
    res.json(results);
  });
});

app.post('/articles', (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO articles (title, content) VALUES (?, ?)', [title, content], (err, results) => {
    if (err) {
      return res.status(500).send('Database query failed');
    }
    res.status(201).send('Article created');
  });
});

app.put('/articles/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.query('UPDATE articles SET title = ?, content = ? WHERE id = ?', [title, content, id], (err, results) => {
    if (err) {
      return res.status(500).send('Database query failed');
    }
    res.status(200).send('Article updated');
  });
});

app.delete('/articles/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM articles WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).send('Database query failed');
    }
    res.status(200).send('Article deleted');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
