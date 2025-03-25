import express from 'express';

const router = express.Router();

let packages = [
  {
    id: 1,
    name: 'Wedding Deluxe',
    unitPrice: 500,
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg',
    soldOut: false,
    season: ['june', 'july', 'august'],
  },
  {
    id: 2,
    name: 'Family Portrait Special',
    unitPrice: 250,
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-2.jpg',
    soldOut: false,
    season: ['november', 'december'],
  },
  {
    id: 3,
    name: 'Package One',
    unitPrice: 150,
    imageUrl:
      'https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-3.jpg',
    soldOut: true,
    season: ['may', 'june', 'april'],
  },
];

// GET all packages
router.get('/', (req, res) => {
  res.json({ data: packages });
});

// GET a single package by ID
router.get('/:id', (req, res) => {
  const pkg = packages.find((p) => p.id === Number(req.params.id));
  if (!pkg) return res.status(404).json({ error: 'Package not found' });
  res.json({ data: pkg });
});

export default router;
