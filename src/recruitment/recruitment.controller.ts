import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createRecruitment(@Body() createRecruitmentDto: CreateRecruitmentDto) {
    this.recruitmentService.createRecruitment(createRecruitmentDto);
  }
}
