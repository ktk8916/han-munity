import {
  Body,
  Controller,
  Delete,
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
  @UsePipes(ValidationPipe)
  updateRecruitment(@Param('id', ParseIntPipe) id:number, @Body() updateRecruitmentDto:UpdateRecruitmentDto){
    return this.recruitmentService.updateRecruitment(id, updateRecruitmentDto);
  }

  @Delete('/:id')
  deleteRecruitment(@Param('id', ParseIntPipe)id:number){
    return this.recruitmentService.deleteRecruitment(id);
  }

  @Patch('/:id/end')
  endRecruitment(@Param('id', ParseIntPipe)id:number){
    return this.recruitmentService.endRecruitment(id);
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
