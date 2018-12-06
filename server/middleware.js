const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const setGlobalMiddleware = app => {
  app.use(morgan("combined"));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
};

module.exports = setGlobalMiddleware;
