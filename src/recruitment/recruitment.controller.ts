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
import { FindRecruitmentDto } from './dto/find-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Get('/:id')
  findRecruitmentById(@Param('id', ParseIntPipe) id:number):Promise<FindRecruitmentDto>{
    return this.recruitmentService.findRecruitmentById(id);
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
    return this.recruitmentService.createRecruitment(createRecruitmentDto);
  }
}
