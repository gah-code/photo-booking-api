import express from 'express';

const router = express.Router();

let orders = [];

router.get('/:id', (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json({ data: order });
});

router.post('/', (req, res) => {
  const newOrder = { id: Date.now(), ...req.body };
  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
});

router.patch('/:id', (req, res) => {
  const index = orders.findIndex((o) => o.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Order not found' });

  orders[index] = { ...orders[index], ...req.body };
  res.json({ data: orders[index] });
});

export default router;
