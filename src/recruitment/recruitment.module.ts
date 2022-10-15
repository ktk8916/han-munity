import { Module } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';
import { RecruitmentController } from './recruitment.controller';
import { RecruitmentRepository } from './recruitment.repository';

@Module({
  providers: [RecruitmentService, RecruitmentRepository],
  controllers: [RecruitmentController],
})
export class RecruitmentModule {}
