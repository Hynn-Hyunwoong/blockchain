import { Socket } from "net";
import MessageData, { Payload } from "./network.interface";
import Inchain from "@core/inchain";

class Message {
  constructor(private readonly blockchain: Inchain) {}

  hanlder(socket: Socket, data: Buffer) {
    const { type, payload } = JSON.parse(data.toString("utf8"));
    const message = (this as any)[type](socket, payload);

    socket.write(message);
    socket.end();
  }

  private latestBlock(payload: Payload): string | undefined {
    const message: MessageData = {
      type: "allBlock",
      payload: this.blockchain.chain.latestBlock(),
    };

    return JSON.stringify(message);
  }
  private allBlock(payload: Payload): string | undefined {
    console.log(payload);
    return;
  }
}

export default Message;
