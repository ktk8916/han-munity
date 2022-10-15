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

  async createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    const recruitment = this.create(createRecruitmentDto);
    await this.save(recruitment);
  }
}
