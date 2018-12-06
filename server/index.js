const http = require("http");
// import { execute, subscribe } from 'graphql'
const { createServer } = require("http");
const config = require("./config");
// uses http for hot module reloading
const app = require("./server");
// import schema from './schema'

const server = http.createServer(app);
let currentApp = app;

server.listen(config.port, () => {
  console.log("Server listening on port", config.port);
});
