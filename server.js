import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT; // 65656

const serverTCP = net.createServer();

serverTCP.on("connection", () => {
  console.log("Client connected :)");
});

serverTCP.listen(PORT, () => {
  console.log("Server UP");
});
