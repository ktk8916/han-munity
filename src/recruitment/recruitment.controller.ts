import { Body, Controller, Post } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/createRecruitment.dto';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {

    constructor(private readonly recruitmentService:RecruitmentService){}

    @Post()
    createRecruitment(@Body() createRecruitmentDto:CreateRecruitmentDto){
        this.recruitmentService.createRecruitment(createRecruitmentDto);
    }
}
