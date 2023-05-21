import net, { Socket } from "net";
import MessageData from "./network.interface";
import { IBlock } from "@core/block/block.interface";

class P2PNetwork {
  private readonly sockets: Socket[] = [];

  // Server Section
  public listen(port: number) {
    const connection = (socket: Socket) => this.handleConnection(socket);
    const server = net.createServer(connection);
    server.listen(port);
  }

  // Client Section
  public connect(port: number, host: string) {
    const socket = new net.Socket();
    console.log(`This server connected complete`);
    const callback = () => this.handleConnection(socket);
    socket.connect(port, host, callback);
  }

  private handleConnection(socket: Socket) {
    console.log(
      `[+] New connection from ${socket.remoteAddress}:${socket.remotePort}`
    );
    this.sockets.push(socket);
    // Broadcast Section
    const disconnect = () => this.handleDisconnection(socket);
    socket.on("close", disconnect);
    socket.on("error", disconnect);
  }

  private handleDisconnection(socket: Socket) {
    const index = this.sockets.indexOf(socket);
    if (index === -1) return;
    this.sockets.splice(index, 1);
    return () => {
      console.log(
        `[-] Disconnected from ${socket.remoteAddress}:${socket.remotePort} Closed`
      );
    };
  }
}

export default P2PNetwork;
