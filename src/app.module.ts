import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
import { RecruitmentModule } from './recruitment/recruitment.module';

@Module({
  imports: [FeedbackModule, RecruitmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
