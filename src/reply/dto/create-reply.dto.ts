import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateReplyDto{
  
  @IsInt()
  parentReplyId:number;
  @IsString()
  @IsNotEmpty()
  content:string;
  @IsString()
  @IsNotEmpty()
  writerName:string;
  @IsString()
  @IsNotEmpty()
  writerPassword:string;
  @IsString()
  @IsNotEmpty()
  writerIp:string;
  @IsInt()
  @IsNotEmpty()
  recruitmentId:number;
}