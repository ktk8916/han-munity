import { Module } from '@nestjs/common';
import { ReplyController } from './reply.controller';
import { ReplyRepository } from './reply.repository';
import { ReplyService } from './reply.service';

@Module({
  controllers: [ReplyController],
  providers: [ReplyService, ReplyRepository]
})
export class ReplyModule {}
