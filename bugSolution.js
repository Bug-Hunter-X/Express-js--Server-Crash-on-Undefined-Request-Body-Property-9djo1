const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Check if the request body is defined and contains the necessary property
  if (!data || !data.someProperty) {
    return res.status(400).json({ error: 'Missing required property: someProperty' });
  }
  console.log(data.someProperty);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));