const massive = require("massive");
const appConfig = require("./config");
// const app = require("../server");

const connect = (app, config = appConfig) => {
  console.log(appConfig);
  massive(appConfig.db)
    .then(db => {
      console.log("Connected to db");
      app.set("db", db);
    })
    .catch(err => console.log(err));
};

module.exports = connect;
