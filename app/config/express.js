import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';

const logger = require('../lib/logger')();

const app = express();

app.use(compression());
app.use(bodyParser.json());

/* ------------------------------------------ *
 * Express route configuration
 * ------------------------------------------ */

const router = new express.Router();
require('../routes/express-routes')(router);

app.use(router);

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  logger.log(`CONNECTED: User socket id ${socket.client.id}`);

  socket.on('disconnect', () => {
    logger.log(`DISCONNECTED: User socket id ${socket.client.id}`);
  });

  socket.on('MESSAGE', (msg) => {
    logger.log('MESSAGE', msg);
    io.emit('NEW_MESSAGE', msg);
  });
});

module.exports = http;
