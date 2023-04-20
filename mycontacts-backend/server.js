const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConection');
dotenv.config();
connectDb();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/contacts', require('./routes/contacts'));
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on port${PORT}`);
})