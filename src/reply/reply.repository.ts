import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateReplyDto } from "./dto/create-reply.dto";
import { Reply } from "./entity/reply.entity";

@Injectable()
export class ReplyRepository extends Repository<Reply>{
  constructor(private readonly dataSource:DataSource){
    super(Reply, dataSource.createEntityManager(), dataSource.createQueryRunner());
  }

  async createReply(createReplyDto:CreateReplyDto){
    const reply = this.create(createReplyDto);
    try {
      await this.save(reply);
    } catch (error) {
      if(error.code === '23503'){
        throw new UnprocessableEntityException(error.detail);
      }
    }
  }

  getReplyByRecruitmentId(recruitmentId:number):Promise<Reply[]>{
    return this.findBy({recruitmentId:recruitmentId})
  }

  getReplyById(id:number):Promise<Reply>{
    return this.findOneBy({replyId:id});
  }
  
  deleteReply(id:number){
    this.update(id, {isDeleted:true});
  }
}