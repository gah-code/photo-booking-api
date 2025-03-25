import express from 'express';

const router = express.Router();

// In-memory data store
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

// POST a new package
router.post('/', (req, res) => {
  const { name, unitPrice, imageUrl, soldOut = false, season = [] } = req.body;

  if (!name || !unitPrice || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newPackage = {
    id: Date.now(),
    name,
    unitPrice,
    imageUrl,
    soldOut,
    season,
  };

  packages.push(newPackage);
  res.status(201).json({ data: newPackage });
});

// PATCH update a package
router.patch('/:id', (req, res) => {
  const index = packages.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Package not found' });

  const existing = packages[index];
  const updated = { ...existing, ...req.body };

  packages[index] = updated;
  res.json({ data: updated });
});

export default router;
