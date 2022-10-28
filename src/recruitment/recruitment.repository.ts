import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { UpdateRecruitmentDto } from './dto/update-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';

@Injectable()
export class RecruitmentRepository extends Repository<Recruitment> {
  constructor(private readonly dataSource: DataSource) {
    super(
      Recruitment,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }

  getRecruitmentById(id:number):Promise<Recruitment>{
    return this.findOneBy({recruitmentId:id});
  }

  getAllRecruitment():Promise<Recruitment[]>{
    return this.find();
  }

  async createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    const recruitment = this.create(createRecruitmentDto);

    //외래키 제약조건(카테고리) 임시조치..
    try {
      await this.save(recruitment);
    } catch (error) {
      if(error.code === '23503'){
        throw new UnprocessableEntityException('UnprocessableEntityException')
      }
    }
  }

  updateRecruitment(id:number, updateRecruitmentDto:UpdateRecruitmentDto){
    this.update(id, updateRecruitmentDto);
  }

  deleteRecruitment(id:number){
    this.update(id, {isDeleted:true});
  }

  endRecruitment(id:number){
    this.update(id, {isEnded:true});
  }
}
