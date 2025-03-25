import express from 'express';

const router = express.Router();

// In-memory mock location list
let locations = [
  {
    id: 1,
    name: 'Golden Gate Park',
    unitPrice: 250,
    email: 'info@ggpark.com',
    date: '2025-04-05',
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg',
    sessionType: 'wedding',
    status: 'available',
    ingredients: ['lush gardens', 'sunlight', 'historic trees'],
    soldOut: false,
  },
  {
    id: 2,
    name: 'Capitola Beach',
    unitPrice: 300,
    email: 'contact@capitolabeach.com',
    date: '2025-05-12',
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg',
    sessionType: 'beach shoot',
    status: 'available',
    ingredients: ['sand', 'waves', 'sunset backdrop'],
    soldOut: false,
  },
  {
    id: 3,
    name: 'Studio A',
    unitPrice: 150,
    email: 'studio@sj.com',
    date: '2025-06-01',
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg',
    sessionType: 'portrait',
    status: 'booked',
    ingredients: ['backdrops', 'lighting rig', 'props'],
    soldOut: true,
  },
];

// GET all locations
router.get('/', (req, res) => {
  res.json({ data: locations });
});

// GET one location by ID
router.get('/:id', (req, res) => {
  const location = locations.find((loc) => loc.id === Number(req.params.id));
  if (!location) return res.status(404).json({ error: 'Location not found' });
  res.json({ data: location });
});

export default router;
