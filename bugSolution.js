const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Validate request body
  if (!newUser || !newUser.name || !newUser.email) {
    return res.status(400).send('Missing required fields');
  }
  db.createUser(newUser, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating user');
    } else {
      res.status(201).send(result);
    }
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});