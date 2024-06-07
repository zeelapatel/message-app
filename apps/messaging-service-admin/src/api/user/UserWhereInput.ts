import { ConversationParticipantListRelationFilter } from "../conversationParticipant/ConversationParticipantListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type UserWhereInput = {
  conversationParticipants?: ConversationParticipantListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  username?: StringFilter;
};
