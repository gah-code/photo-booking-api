import express from 'express';
import fs from 'fs';

const router = express.Router();
const bookingsFile = new URL('../data/bookings.json', import.meta.url);

function readBookings() {
  const data = fs.readFileSync(bookingsFile, 'utf-8');
  return JSON.parse(data);
}

function writeBookings(data) {
  fs.writeFileSync(bookingsFile, JSON.stringify(data, null, 2));
}

// GET all bookings
router.get('/', (req, res) => {
  const bookings = readBookings();
  res.json({ data: bookings });
});

// GET one booking
router.get('/:id', (req, res) => {
  const bookings = readBookings();
  const booking = bookings.find((b) => b.id === Number(req.params.id));
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.json({ data: booking });
});

// POST a new booking
router.post('/', (req, res) => {
  const bookings = readBookings();
  const newBooking = { id: Date.now(), ...req.body };
  bookings.push(newBooking);
  writeBookings(bookings);
  res.status(201).json({ data: newBooking });
});

// PATCH update a booking
router.patch('/:id', (req, res) => {
  const bookings = readBookings();
  const index = bookings.findIndex((b) => b.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Booking not found' });

  bookings[index] = { ...bookings[index], ...req.body };
  writeBookings(bookings);
  res.json({ data: bookings[index] });
});

export default router;
