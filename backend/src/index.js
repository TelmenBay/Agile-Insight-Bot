import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = [
    process.env.FRONTEND_URL,
    'http://localhost:3000',
].filter(Boolean);

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/api/routes', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
