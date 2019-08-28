const app = require('./app');

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});

module.exports = app;
