import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateRecruitmentDto{
  @IsInt()
  @IsNotEmpty()
  categoryId: number;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  openTalkLink: string;
}