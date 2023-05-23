import { IBlock } from "@core/block/block.interface";

export type MessageType = "latestBlock" | "allBlock";
export type Payload = IBlock | IBlock[];
export default interface MessageData {
  type: MessageType;
  payload: Payload;
}
