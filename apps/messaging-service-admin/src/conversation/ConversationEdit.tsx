import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ConversationParticipantTitle } from "../conversationParticipant/ConversationParticipantTitle";
import { MessageTitle } from "../message/MessageTitle";

export const ConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="conversationParticipants"
          reference="ConversationParticipant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConversationParticipantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
