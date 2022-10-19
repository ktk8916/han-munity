import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { FindRecruitmentDto } from './dto/find-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentRepository } from './recruitment.repository';

@Injectable()
export class RecruitmentService {
  constructor(private readonly recruitmentRepository: RecruitmentRepository) {}

  async getAllRecruitment():Promise<Recruitment[]>{
    return await this.recruitmentRepository.getAllRecruitment();
  }

  async getOneRecruitment(id:number):Promise<Recruitment>{

    const found = await this.recruitmentRepository.getRecruitmentById(id);
    
    if(!found){
      throw new NotFoundException(`Can't find recruitment id : ${id}`);
    }

    if(found.isDeleted === true){
      throw new NotFoundException(`Deleted recruitment id : ${id}`);
    }

    return found;
  }

  async findRecruitmentById(id:number):Promise<FindRecruitmentDto>{
    const {recruitmentId, 
          categoryId, 
          title, 
          content, 
          openTalkLink, 
          createdAt,
          views, 
          isEnded, 
          writerName, 
          writerPassword, 
          writerIp} = await this.getOneRecruitment(id);
    const getRecruitmentDto = new FindRecruitmentDto(recruitmentId, categoryId, title, content, openTalkLink, createdAt, views, isEnded, writerName, writerPassword, writerIp);
    return getRecruitmentDto;
  }



  async createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    await this.recruitmentRepository.createRecruitment(createRecruitmentDto);
  }

  async updateRecruitment(id:number, updateRecruitmentDto:UpdateRecruitmentDto){
    await this.getOneRecruitment(id);
    this.recruitmentRepository.updateRecruitment(id, updateRecruitmentDto); 
  }

  async deleteRecruitment(id:number){
    await this.getOneRecruitment(id);
    this.recruitmentRepository.deleteRecruitment(id);
  }

  async endRecruitment(id:number){
    await this.getOneRecruitment(id);
    this.recruitmentRepository.endRecruitment(id);
  }
}
