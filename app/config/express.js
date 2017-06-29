import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';

const app = express();

app.use(compression());
app.use(bodyParser.json());

/* ------------------------------------------ *
 * Express route configuration
 * ------------------------------------------ */

const router = new express.Router();
require('../routes/express-routes')(router);

app.use(router);


module.exports = app;
