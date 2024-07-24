// index.js
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'sarvesh' && password === '1234') {
      res.send('Login successful!');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
