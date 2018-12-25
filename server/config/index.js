const merge = require("lodash.merge");
// const app = require("../server");
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3124,
  secrets: { SESSION_SECRET: "twocansecretifoneofthemisdead" }
};

let envConfig = {};

switch (env) {
  case "development":
  case "dev":
    envConfig = require("./dev");
    break;
  case "test":
  case "testing":
    envConfig = require("./testing");
    break;
  case "prod":
  case "production":
    envConfig = require("./prod");
  default:
    envConfig = require("./dev");
}
const appConfig = merge(baseConfig, envConfig);
module.exports = appConfig;
