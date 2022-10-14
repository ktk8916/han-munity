import { Injectable } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/createRecruitment.dto';
import { Recruitment } from './entity/recruitment.entity';

@Injectable()
export class RecruitmentService {
    private recruitments: Recruitment[] = [];
    private sequence = 0;

    private recruitmentCreateTime = '20221014';
    private recruitmentViews = 0
    private recruitmentIsEnded = false;
    private recruitmentIsDeleted = false;

    createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
        this.sequence++;
        const { recruitmentCategory, 
                recruitmentTitle,
                recruitmentContent,
                openTalkLink,
                recruitmentWriterName,
                recruitmentWriterPassword,
                recruitmentWriterIp 
            } = createRecruitmentDto;
        const recruitment:Recruitment = {
            recruitmentId: this.sequence,
            recruitmentCategory,
            recruitmentTitle,
            recruitmentContent,
            openTalkLink,
            recruitmentCreateTime : this.recruitmentCreateTime,
            recruitmentViews: this.recruitmentViews,
            recruitmentIsEnded: this.recruitmentIsEnded,
            recruitmentIsDeleted: this.recruitmentIsDeleted,
            recruitmentWriterName,
            recruitmentWriterPassword,
            recruitmentWriterIp
        }
        this.recruitments.push(recruitment);

        console.log(recruitment);
    }

    getAllRecruitment(){
        return this.recruitments;
    }

    
}
