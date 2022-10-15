import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecruitmentDto {
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
  @IsString()
  @IsNotEmpty()
  writerName: string;
  @IsString()
  @IsNotEmpty()
  writerPassword: string;
  @IsString()
  @IsNotEmpty()
  writerIp: string;
}
