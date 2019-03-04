const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// const authRouter = require('./routes/auth');
const usersRouter = require('./routes/user');
const uploadRouter = require('./routes/upload_file');

// setup mongoose connection
const { mongoose } = require('./db/mongoose');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// require('./auth/setup_auth')(app);

const PORT = process.env.PORT || 3000;

// app.use('/auth', authRouter);
app.use('/', usersRouter);
app.use('/', uploadRouter);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});