const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", routes);

io.on("connection", (socket) => {
    socket.on("msg", (input) => {
        console.log(input);
        socket.broadcast.emit("msg", input);
        socket.emit("msg", input);
    });
});

http.listen(3001, "000.000.0.00", () => {
    console.log("Servidor do Mensageiro está no ar!");
});
