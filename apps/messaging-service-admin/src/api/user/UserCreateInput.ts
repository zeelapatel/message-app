import { ConversationParticipantCreateNestedManyWithoutUsersInput } from "./ConversationParticipantCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
