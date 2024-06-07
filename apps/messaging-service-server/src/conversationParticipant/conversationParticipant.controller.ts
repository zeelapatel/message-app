import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationParticipantService } from "./conversationParticipant.service";
import { ConversationParticipantControllerBase } from "./base/conversationParticipant.controller.base";

@swagger.ApiTags("conversationParticipants")
@common.Controller("conversationParticipants")
export class ConversationParticipantController extends ConversationParticipantControllerBase {
  constructor(protected readonly service: ConversationParticipantService) {
    super(service);
  }
}
