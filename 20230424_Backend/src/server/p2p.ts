import net, { Socket } from "net";

class P2PNetwork {
  listen(port: number) {
    const server = net.createServer((socket: Socket) => {
      console.log(socket);
    });

    server.listen(port);
  }
  connect(port: number, host: string) {
    const socket = new net.Socket();
    socket.connect(port, host, () => {
      console.log("Connected");
    });
  }
}
