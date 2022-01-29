


const express=require('express');
require("./db/dbConnection")
//const userRouter = require('./router/userRouter');
const kitapRouter = require('./router/kitapRouter');

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api/users', userRouter);
app.use('/api/kitaps', kitapRouter);
app.listen(3000,()=>{
    console.log("3000 portundan calisiyor")
});

/*
const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})
/*
//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    console.log("yeni baglatnii"+userSocket);
    userSocket.on("send_message", (data) => {
        console.log("sendde");
        userSocket.broadcast.emit("receive_message", data)
    })
})*/

//http.listen(8080)