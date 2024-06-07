import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  sentAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
