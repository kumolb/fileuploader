const express = require("express");
const route = require("./router");
const app = express();
const multer = require("multer");
const socket = require("./socket.js");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use("/", route);
app.use("/", (req, res) => {
    socket.createAnEvent();
    return res.send("hello");
})

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/uploads', express.static("uploads"))
const server = app.listen(4000, (err) => {
    console.log(err ? err : "success");
});

socket.init(server);