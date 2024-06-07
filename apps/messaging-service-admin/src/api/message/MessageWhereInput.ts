import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
