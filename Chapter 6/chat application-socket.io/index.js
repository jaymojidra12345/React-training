const express = require("express");
const app = express();
const port = 9000;

const path = require("path");
const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected : ", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected : ", socket.id);
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message from  "+ socket.id + " : => " + msg);
     io.emit('chat message', msg);   //broadcasting to all devices
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
