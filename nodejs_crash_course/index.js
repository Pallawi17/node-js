const express = require('express');
const app = express();

const PORT = 8080;

app.get('/',(req, res) => {
  res.json({message:"This is home page"});
});

app.get('/users', (req, res) => {
  res.json({message: "Get all users"});
});

app.get('/user/:id', (req, res) => {
  res.json({message: `Get user with id ${req.params.id}`});
});

app.post('/user', (req, res) => {
  res.json({message: `create user`});
});

app.put('/user/:id', (req, res) => {
  res.json({message: `Update user with id ${req.params.id}`});
});

app.delete('/user/:id', (req, res) => {
  res.json({message: `delete user with id ${req.params.id}`});
});

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
})