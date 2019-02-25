const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const usersRouter = require('./routes/user');

// setup mongoose connection
const {mongoose} = require('./db/mongoose');

const app = express();
app.use(bodyParser.json());
require('./auth/setup_auth')(app);

const PORT = process.env.PORT || 3000;

app.use('/', authRouter);
app.use('/', usersRouter);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});