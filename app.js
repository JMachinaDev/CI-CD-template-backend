const express = require('express');
const cors = require('cors');
const testAPIroute = require('./routes/testAPI');

require('dotenv').config();

const corsOptions = {
  origin: 8000
};
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/test', testAPIroute);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("Server started")
})
