import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Get('/:id')
  getRecruitment(@Param('id', ParseIntPipe) id:number):Promise<Recruitment>{
    return this.recruitmentService.getRecruitmentById(id);
  }

  @Patch('/:id')
  updateRecruitment(@Param('id', ParseIntPipe) id:number, @Body() updateRecruitmentDto:UpdateRecruitmentDto){
    return this.recruitmentService.updateRecruitment(id, updateRecruitmentDto);

  }

  @Get()
  getAllRecruitment():Promise<Recruitment[]>{
    return this.recruitmentService.getAllRecruitment();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createRecruitment(@Body() createRecruitmentDto: CreateRecruitmentDto) {
    this.recruitmentService.createRecruitment(createRecruitmentDto);
  }
}
