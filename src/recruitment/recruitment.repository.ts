import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
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
    return  this.findOneBy({recruitmentId:id});
  }

  getAllRecruitment():Promise<Recruitment[]>{
    return this.find();
  }

  createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    const recruitment = this.create(createRecruitmentDto);
    this.save(recruitment);
  }
}
