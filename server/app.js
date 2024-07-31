// index.js
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import Admins from './Models/Admins.js'
import brandRouter from './Routes/brandRoute.js';
import categoryRouter from './Routes/categoryRoute.js';
import productRouter from './Routes/productRoute.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const SECRET_KEY = 'MNBVCXZPOIUYTREWQLK0192837465JHGFDSAlaksjdhfg';

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fashionhub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('debug', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/brands', brandRouter);
app.use('/category', categoryRouter);
app.use('/products', productRouter);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admins.findOne({ username, password });

    if (admin) {
        // Generate a JWT token
        // const token = jwt.sign({ id: admin._id, username: admin.username }, SECRET_KEY, { expiresIn: '2d' });

        res.status(202).json({
            success: true,
            message: "Login Successfully",
            username: username
        });
    } else {
        res.status(202).json({
            success: false,
            message: "Username or Password is incorrect"
        });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
