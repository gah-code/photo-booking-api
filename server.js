import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingsRouter from './routes/bookings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // to parse JSON body
app.use('/api/bookings', bookingsRouter);

app.get('/', (req, res) => {
  res.send('📸 Photography Booking API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
