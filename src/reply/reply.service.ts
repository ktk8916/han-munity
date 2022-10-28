import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { Reply } from './entity/reply.entity';
import { ReplyRepository } from './reply.repository';

@Injectable()
export class ReplyService {

  constructor(private readonly replyRepository:ReplyRepository){}

  async getOneReply(id:number):Promise<Reply>{
    const found = await this.replyRepository.getReplyById(id)
    if(!found) {
      throw new NotFoundException(`Can't find reply id : ${id}`)
    }

    if(found.isDeleted){
      throw new NotFoundException(`Deleted reply id : ${id}`)
    }

    return found;
  }

  async createReply(createReplyDto:CreateReplyDto){
    await this.replyRepository.createReply(createReplyDto);
  }

  async getReplyByRecruitmentId(recruitmentId:number){
    return await this.replyRepository.getReplyByRecruitmentId(recruitmentId);
  }

  async deleteReply(id:number){
    await this.getOneReply(id);
    this.replyRepository.deleteReply(id);
  }

  
}
