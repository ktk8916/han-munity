import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/createRecruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {

    constructor(private readonly recruitmentService:RecruitmentService){}

    @Get()
    getAllRecruitment(){
        return this.recruitmentService.getAllRecruitment();
    }

    @Post()
    createRecruitment(@Body() createRecruitmentDto:CreateRecruitmentDto){
        this.recruitmentService.createRecruitment(createRecruitmentDto);
    }
    
}
