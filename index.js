const express = require('express');
const cors = require('cors');
const { connect, connection } = require('mongoose');

const routes = require('./routes');

const requestHandler = require('./handlers/requestHandler');
const errorHandler = require('./handlers/errorHandler');
const responseHandler = require('./handlers/responseHandler');

const dotenv = require('dotenv');
dotenv.config();

try {
  connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.once('open', () => {
    console.log('Connected to database');
  });
} catch (error) {
  console.log(`Couldn't connect to database: ${error}`);
}

// ============ App ============ //

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestHandler);

app.use(routes);

app.use(errorHandler);
app.use(responseHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
