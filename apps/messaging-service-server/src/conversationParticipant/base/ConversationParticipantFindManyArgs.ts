/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationParticipantWhereInput } from "./ConversationParticipantWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConversationParticipantOrderByInput } from "./ConversationParticipantOrderByInput";

@ArgsType()
class ConversationParticipantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConversationParticipantWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConversationParticipantWhereInput, { nullable: true })
  @Type(() => ConversationParticipantWhereInput)
  where?: ConversationParticipantWhereInput;

  @ApiProperty({
    required: false,
    type: [ConversationParticipantOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConversationParticipantOrderByInput], { nullable: true })
  @Type(() => ConversationParticipantOrderByInput)
  orderBy?: Array<ConversationParticipantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConversationParticipantFindManyArgs as ConversationParticipantFindManyArgs };
