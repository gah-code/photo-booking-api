import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingsRouter from './routes/bookings.js';
import locationsRouter from './routes/locations.js';
import packagesRouter from './routes/packages.js';
import pizzasRouter from './routes/pizzas.js';
import ordersRouter from './routes/orders.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // to parse JSON body
app.use('/api/bookings', bookingsRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/packages', packagesRouter);
app.use('/api/pizzas', pizzasRouter);
app.use('/api/order', ordersRouter);

app.get('/', (req, res) => {
  res.send('📸 Photography Booking API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
