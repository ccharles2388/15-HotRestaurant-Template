const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const PORT = process.env.PORT || 8081;
const app = express();

const createApp = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

  app.use('/', require('./server/routes/htmlRoutes'));
  // app.use('/api', require('./server/routes/apiRoutes'));

  // No Need Public Folder In This App 
  // app.use(express.static(path.join(__dirname,  'public')));

  app.use((err, req, res, next) => {
    console.error(err);
    res.pipe(
      err.status || 500,
      err.message || 'Internal Server Error'
    );
  });
};

const createConnection = () => {
  // console.log(db)
};

const serverListen = () => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
};

const run = async () => {
  await createApp();
  // Disabled For Now 
  // await createConnection();
  await serverListen();
};

run();
