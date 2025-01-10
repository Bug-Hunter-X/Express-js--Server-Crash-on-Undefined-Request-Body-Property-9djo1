const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Missing error handling for cases where req.body is undefined or empty
  console.log(data.someProperty); // This will throw an error if someProperty is not present
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));