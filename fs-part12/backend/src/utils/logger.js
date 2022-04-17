/* eslint-disable no-console */
const { isTestEnvironment } = require('./environment');

const logger = () => {
  const logConsole = (message) => {
    if (!isTestEnvironment) {
      console.log(message);
    }
  };

  const errorConsole = (message) => {
    if (!isTestEnvironment) {
      console.error(`ERROR - ${Date.now()} - ${message}`);
    }
  };

  return {
    logConsole,
    errorConsole,
  };
};

module.exports = logger();
