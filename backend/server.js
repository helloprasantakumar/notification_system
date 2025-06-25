const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {origin: "*"}
});

app.use(cors());
app.use(bodyParser.json());

io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
});

app.post("/submit-score", (req, res) => {
    const {msg, user} = req.body;
    console.log("Score received from Postman:", {msg, user});

    // Emit to all connected clients
    io.emit("scoreUpdate", {
        msg, user, message: `Request!`
    });

    res.status(200).json({status: "success", msg, user});
});

server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
