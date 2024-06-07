import * as graphql from "@nestjs/graphql";
import { ConversationParticipantResolverBase } from "./base/conversationParticipant.resolver.base";
import { ConversationParticipant } from "./base/ConversationParticipant";
import { ConversationParticipantService } from "./conversationParticipant.service";

@graphql.Resolver(() => ConversationParticipant)
export class ConversationParticipantResolver extends ConversationParticipantResolverBase {
  constructor(protected readonly service: ConversationParticipantService) {
    super(service);
  }
}
