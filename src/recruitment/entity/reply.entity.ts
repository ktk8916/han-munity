import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Recruitment } from "./recruitment.entity";

@Entity({name:"reply"})
export class reply extends BaseEntity{
  @PrimaryGeneratedColumn({name:"reply_id"})
  replyId:number;

  @Column({name:"parent_reply_id"})
  parentReplyId:number;

  @Column({name:"content"})
  content:string;

  @CreateDateColumn({name:"created_at"})
  createdAt:Date;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'writer_name' })
  writerName: string;

  @Column({ name: 'writer_password' })
  writerPassword: string;

  @Column({ name: 'writer_ip', type: 'inet' })
  writerIp: string;

  @ManyToOne(()=>Recruitment, (recruitment)=>recruitment.recruitmentId)
  recruitmentId:number;
}
