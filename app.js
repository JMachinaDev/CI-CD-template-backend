const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: '*'
};
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const testAPIroute = require('./app/routes/testAPI');
app.use('/test', testAPIroute);

// Listen to DB/Port
const PORT = require('./app/config/port.config').port;
const port = PORT || 8000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("Server started")
});
