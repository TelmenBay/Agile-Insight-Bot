import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/routes', router); 

app.listen(PORT);
