// app = express();

module.exports = function (app) {

  app.get('/', (req, res) => {
    res.send('Hello World!')
  });

  //test routes
  app.get('/test', (req, res) => {
    res.send("Test route is working properly");
  });

};

