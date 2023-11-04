import net from "node:net";

const serverTCP = net.createServer();

serverTCP.on("connection", () => {
  console.log("Client connected :)");
});

serverTCP.listen(1234, () => {
  console.log("Server UP");
});
