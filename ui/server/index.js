const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

const usersData ={}


io.on("connection", (socket) => {
  console.log("new user connected..!", socket.id);


  socket.broadcast.emit("newuser", usersData);

  socket.on('sendMessage', ({ roomId, message:{text,user} }) => {
    console.log("Message from client", {user, text});
    socket.to(user).emit("receiveMessage",  {text});
  });
 
   socket.on('myName', (name) => {
    usersData[name] = socket.id;
    console.log("User data is ", usersData);
  })

  socket.on("disconnect", () => {
    socket.broadcast.emit("userDisconnect", socket.id);
    console.log(" User got disconnect !", socket.id);
  });
});

server.listen("2000", () => {
  console.log("Server is running at 2000 !");
});
