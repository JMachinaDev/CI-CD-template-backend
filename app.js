const express = require('express');
const cors = require('cors');

// cors and express setup
const corsOptions = {
  origin: '*'
};
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

// Routes
require('./app/routes/testAPI')(app);

// Listen to DB/Port
const PORT = require('./app/config/port.config').port;
const port = PORT || 8000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("Server started")
});
