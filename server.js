if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} 

const express = require('express');
const path = require('path');
const app = express();
const birthdaysRouter = require('./server/routes/birthdays');
require('./server/db/config');

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.use(express.json());

app.use('/api/birthdays', birthdaysRouter);

app.use((err, req, res, next) => {
  //  console.log(err);
   res.status(err.statusCode || 500);
   res.json({
       message: err.message,
       error: err,
   });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});