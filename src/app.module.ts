import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { typeORMConfig } from './configs/typeorm.config';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    FeedbackModule,
    RecruitmentModule,
    ReplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
