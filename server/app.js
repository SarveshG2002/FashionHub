// index.js
import express from 'express';
import cors from 'cors';
import Admins from './Models/Admins.js'
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fashionhub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admins.findOne({username,password});

    if (admin) {
        res.status(202).json({ "success": true, "message": "Login Successfully" });
    } else {
        res.status(202).json({ "success": false, "message": "Username or Password is incorrect" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
