export enum MessageType {
  ApiMessage = "assistantMessage",
  UserMessage = "userMessage",
}

export type ChatMessage = {
  type: MessageType;
  message: string;
  isStreaming?: boolean;
  sources?: any;
  savedQueryId?: number | string;
};
