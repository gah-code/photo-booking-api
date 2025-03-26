// import express from 'express';

// const router = express.Router();

// let orders = [];

// router.get('/:id', (req, res) => {
//   const order = orders.find((o) => o.id === Number(req.params.id));
//   if (!order) return res.status(404).json({ error: 'Order not found' });
//   res.json({ data: order });
// });

// router.post('/', (req, res) => {
//   const newOrder = { id: Date.now(), ...req.body };
//   orders.push(newOrder);
//   res.status(201).json({ data: newOrder });
// });

// router.patch('/:id', (req, res) => {
//   const index = orders.findIndex((o) => o.id === Number(req.params.id));
//   if (index === -1) return res.status(404).json({ error: 'Order not found' });

//   orders[index] = { ...orders[index], ...req.body };
//   res.json({ data: orders[index] });
// });

// export default router;

import express from 'express';

const router = express.Router();

let orders = [];

// GET /api/order/:id
router.get('/:id', (req, res) => {
  const order = orders.find((o) => o.id === Number(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });

  res.json({ data: order });
});

// POST /api/order
router.post('/', (req, res) => {
  const { customer, phone, address, cart = [], priority = false } = req.body;

  if (!customer || !phone || !address || cart.length === 0) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Calculate prices
  const orderPrice = cart.reduce(
    (total, item) => total + item.quantity * item.unitPrice,
    0
  );

  const priorityPrice = priority ? orderPrice * 0.2 : 0;
  const totalPrice = orderPrice + priorityPrice;

  // Set estimated delivery to now + 30 or 60 mins
  const estimatedDelivery = new Date(
    Date.now() + (priority ? 30 : 60) * 60_000
  );

  const newOrder = {
    id: Date.now(),
    customer,
    phone,
    address,
    cart,
    priority,
    orderPrice,
    priorityPrice,
    totalPrice,
    estimatedDelivery: estimatedDelivery.toISOString(),
    status: 'preparing',
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
});

// PATCH /api/order/:id
router.patch('/:id', (req, res) => {
  const index = orders.findIndex((o) => o.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Order not found' });

  orders[index] = {
    ...orders[index],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };

  res.json({ data: orders[index] });
});

export default router;
