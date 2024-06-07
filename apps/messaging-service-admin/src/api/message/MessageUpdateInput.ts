import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  sentAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
