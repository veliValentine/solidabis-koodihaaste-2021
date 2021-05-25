const http = require('http');
const app = require('./server/app');

const logger = require('./server/utils/logger');


const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  logger.logConsole(`Server running on port: ${PORT}`);
});
