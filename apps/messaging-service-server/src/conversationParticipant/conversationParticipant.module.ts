import { Module } from "@nestjs/common";
import { ConversationParticipantModuleBase } from "./base/conversationParticipant.module.base";
import { ConversationParticipantService } from "./conversationParticipant.service";
import { ConversationParticipantController } from "./conversationParticipant.controller";
import { ConversationParticipantResolver } from "./conversationParticipant.resolver";

@Module({
  imports: [ConversationParticipantModuleBase],
  controllers: [ConversationParticipantController],
  providers: [ConversationParticipantService, ConversationParticipantResolver],
  exports: [ConversationParticipantService],
})
export class ConversationParticipantModule {}
