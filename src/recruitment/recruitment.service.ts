import { Injectable } from '@nestjs/common';
import { CreateRecruitmentDto } from './dto/create-recruitment.dto';
import { Recruitment } from './entity/recruitment.entity';
import { RecruitmentRepository } from './recruitment.repository';

@Injectable()
export class RecruitmentService {
  constructor(private readonly recruitmentRepository: RecruitmentRepository) {}

  createRecruitment(createRecruitmentDto: CreateRecruitmentDto) {
    this.recruitmentRepository.createRecruitment(createRecruitmentDto);
  }
}
