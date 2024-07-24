// index.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'sarveshgandhere2002@gmail.com' && password === '1234') {
      res.status(202).json({"success":true,"message":"Login Successfully"});
    } else {
        res.status(202).json({"success":false,"message":"Username or Password is incorrect"});
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
