import net, { Socket } from "net";

class P2PNetwork {
  listen(port: number) {
    const server = net.createServer((socket: Socket) => {
      console.log(socket.remotePort);
      console.log("New connection");
      socket.write("Hello world");
    });
    console.log("Listening on port: ", port);

    server.listen(port);
  }
  connect(port: number, host: string) {
    const socket = new net.Socket();
    socket.connect(port, host, () => {
      console.log(socket.remotePort);
      console.log("Connected");

      socket.on("data", (data: Buffer) => {
        console.log(data);
        console.log(data.toString("utf8"));
      });
    });
  }
}

export default P2PNetwork;
