const express = require('express');
const session = require('express-session');

const {mongoose} = require('./db/mongoose');

const app = express();
require('auth/setup_auth')(app);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});