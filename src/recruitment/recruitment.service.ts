import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { getRecruitmentDto } from './dto/get-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentRepository } from './recruitment.repository';

@Injectable()
export class RecruitmentService {
  constructor(private readonly recruitmentRepository: RecruitmentRepository) {}

  async getAllRecruitment():Promise<Recruitment[]>{
    return await this.recruitmentRepository.getAllRecruitment();
  }

  async getRecruitmentById(id:number):Promise<Recruitment>{


    
    const found = await this.recruitmentRepository.getRecruitmentById(id);
    
    if(!found){
      throw new NotFoundException(`Can't find recruitment id : ${id}`);
    }
    return found;
    
  }

  createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    this.recruitmentRepository.createRecruitment(createRecruitmentDto);
  }

  async updateRecruitment(id:number, updateRecruitmentDto:UpdateRecruitmentDto){

    const recruitment = await this.getRecruitmentById(id);
    const {categoryId, title, content, openTalkLink} = updateRecruitmentDto;
    recruitment.categoryId = categoryId;
    recruitment.title = title;
    recruitment.content = content;
    recruitment.openTalkLink = openTalkLink;

    this.recruitmentRepository.save(recruitment);
    return recruitment;
  }
}
