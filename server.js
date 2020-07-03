const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes');

const requestHandler = require('./handlers/requestHandler');
const responseHandler = require('./handlers/responseHandler');
const errorHandler = require('./handlers/errorHandler');

dotenv.config();

// ============ MONGO DB ============ //
const { connect, connection } = require('mongoose');

try {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.once('open', () => {
    console.log('Connection connected successfully!');
  });
} catch (err) {
  console.log(`Connection failed successfully!: ${err}`);
}

// ============ MIDDLEWARES ============ //

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestHandler);

app.use(routes);

app.use(errorHandler);
app.use(responseHandler);

// ============ RUNNING SERVER ============ //

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
