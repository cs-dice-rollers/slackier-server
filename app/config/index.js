const config = {
  port: process.env.PORT || 3000,
  eventNames: {
    receiveMessage: 'CLIENT_MESSAGE',
    sendMessage: 'SERVER_MESSAGE',
  },
};

module.exports = config;
