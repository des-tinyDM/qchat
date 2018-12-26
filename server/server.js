require("dotenv").config();
const express = require("express");
const setupMiddware = require("./middleware");
// import { restRouter, graphQLRouter } from "./api";
const connect = require("./db");
// import { signin, protect } from "./api/modules/auth";
// Declare an app from express
const app = express();
const userRouter = require("./api/routes/userRouter");

// const apiRouter = express.Router();
// //api Router is mounted at /api (below);
// apiRouter.get("/", (req, res) => res.json({ api: true }));
// apiRouter.get("*", (req, res) => res.json({ apiAll: true }));

setupMiddware(app);

connect(app);

// setup basic routing for index route

// app.use("/signin", signin);
// app.use("/api", protect, restRouter);
// app.use("/graphql", graphQLRouter);
// app.use("/docs", graphiqlExpress({ endpointURL: "/graphql" }));
// catch all
app.use("/user", userRouter);
app.all("*", (req, res) => {
  res.json({ ok: true });
});

module.exports = app;
