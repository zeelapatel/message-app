import { ConversationParticipantCreateNestedManyWithoutConversationsInput } from "./ConversationParticipantCreateNestedManyWithoutConversationsInput";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutConversationsInput;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  title?: string | null;
};
