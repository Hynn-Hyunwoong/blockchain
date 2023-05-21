import { IBlock } from "@core/block/block.interface";

type MessageType = "latestBlock" | "allBlocks";
type Payload = IBlock | IBlock[];
export default interface MessageData {
  type: MessageType;
  payload: Payload;
}
