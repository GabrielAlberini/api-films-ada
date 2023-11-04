import net from "node:net";
import dotenv from "dotenv";
dotenv.config();

const OPTIONS = {
  port: process.env.PORT,
  host: process.env.HOST,
};

const clientTCP = net.createConnection(OPTIONS);

clientTCP.on("connect", () => {
  console.log("Connected to server :D");
});
