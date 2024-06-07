/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationParticipantWhereInput } from "./ConversationParticipantWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConversationParticipantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConversationParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationParticipantWhereInput)
  @IsOptional()
  @Field(() => ConversationParticipantWhereInput, {
    nullable: true,
  })
  every?: ConversationParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationParticipantWhereInput)
  @IsOptional()
  @Field(() => ConversationParticipantWhereInput, {
    nullable: true,
  })
  some?: ConversationParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationParticipantWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationParticipantWhereInput)
  @IsOptional()
  @Field(() => ConversationParticipantWhereInput, {
    nullable: true,
  })
  none?: ConversationParticipantWhereInput;
}
export { ConversationParticipantListRelationFilter as ConversationParticipantListRelationFilter };
